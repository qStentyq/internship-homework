import { useEffect, useState } from 'react'
import CurrencySelector from './components/CurrencySelector'
import './App.css'
import { debounce } from 'lodash'
import { fetchDataFromApi } from './services/converterApi'
import HistoryList from './components/HistoryList'

//CONSTANTS 
const DEFAULT_FROM_CURRENCY = 'mdl';
const DEFAULT_TO_CURRENCY = 'usd';
const POPULAR_CURRENCIES = ['mdl','usd','eur','ron']


function App() {
	const [apiData, setApiData] = useState(null)
	const [curRateHistory, setCurRateHistory] = useState({})
	const [fromCurrency, setFromCurrency] = useState(DEFAULT_FROM_CURRENCY)
	const [toCurrency, setToCurrency] = useState(DEFAULT_TO_CURRENCY)
	const [rates, setRates] = useState(null)
	const [amount, setAmount] = useState(0)
	
	//DATA FETCH HELPER FOR ALL FETCH CALLS
	const fetchCurrencyData = async (endpoint) => {
		try {
			return await fetchDataFromApi(endpoint);
		} catch (error) {
			console.error(`Error fetching data from ${endpoint}:`, error);
			return null;
		}
		};

	useEffect(() => {
		const fetchData = async () => {
			const apiDataResp = await fetchCurrencyData('latest/v1/currencies.json')
			if(apiDataResp) {
				setApiData(Object.entries(apiDataResp).map(([value, label]) => ({ value, label })))
			}
			const curDefault = await fetchCurrencyData(`latest/v1/currencies/${fromCurrency}.json`)
			if(curDefault) {
				setRates(curDefault[fromCurrency])
			}
			await fetchHistory(fromCurrency)
		}
		if (!apiData) {
			fetchData()
		}
	}, [apiData])

	const calculateResult = () => {
		if (rates && amount && toCurrency && rates[toCurrency]) {
		  return amount * rates[toCurrency];
		}
		return null;
	  };
	  
	const swapChanges = async e => {
		e.preventDefault()
		const temp = fromCurrency
		setFromCurrency(toCurrency)
		setToCurrency(temp)

		await fetchCurrency(toCurrency)
	}

	const fromInputHandler = debounce((value) => {
		// e.preventDefault();
		setAmount(value);
	}, 50)

	const handleInputChange = (e) => {
		const value = e.target.value;
		fromInputHandler(value)
	}

	//FETCH CONCRETE CURRENCY
	const fetchCurrency = async currency => {
		setCurRateHistory(null)
		const currencyData = await fetchCurrencyData(`latest/v1/currencies/${currency}.json`)
		if(currencyData) {
			setRates(currencyData[currency])
		}
		//fetch history
		await fetchHistory(currency)
		return currencyData
	}

	const fetchHistory = async currency => {
		const history = {}
		for (let i = 0; i < 10; i++) {
			let date = new Date()
			date.setDate(date.getDate() - i)
			let formattedDate = date.toISOString().split('T')[0]
			const dayData = await fetchCurrencyData(`${formattedDate}/v1/currencies/${currency}.json`)
			if(dayData) {
				history[formattedDate] = dayData[currency];
			}
		}
		setCurRateHistory(history)
	}

	return (
		<div className='container fade-in'>
			{!apiData  ? (
				<div className='loading'>
					<div className='card skeleton'>
						<h1>Загрузка данных...</h1>
					</div>
				</div>
			) : (
				<>
					<div className='cur'>
						<CurrencySelector
							onChange={selected => {
								setFromCurrency(selected?.value)
								fetchCurrency(selected?.value)
							}}
							value={fromCurrency}
							name='exchange-1'
							options={apiData}
							placeholder='Select From Currency'
						/>
						<input
							type='number'
							name='cur-1'
							id='cur-1'
							value={amount}
							onChange={handleInputChange}
							placeholder='Enter Amount'
						/>
					</div>
					<img
						src='./swap.png'
						alt='swap'
						onClick={swapChanges}
						className='swap'
					/>
					<div className='cur'>
						<CurrencySelector
							onChange={selected => {
								setToCurrency(selected?.value)
								fetchHistory(fromCurrency)
							}}
							value={toCurrency}
							name='exchange-2'
							options={apiData}
							placeholder='Select To Currency'
						/>
						<input
							type='number'
							name='cur-2'
							id='cur-2'
							disabled
							value={calculateResult() || 0}
							placeholder='Converted Amount'
						/>
					</div>
					{curRateHistory ? (
						<div className='card history fade-in'>
							<h2>История курсов</h2>
							<HistoryList history={curRateHistory} amount={amount} toCurrency={toCurrency} rate={rates}/>
						</div>
					) : (
						<div className='card loading skeleton'>
							<h2>Загрузка истории...</h2>
						</div>
					)}
					<div className='popular_rates'>
						{rates && (
						<div className="rate_container toast ">
						Rates vs most popular currencies:
						{POPULAR_CURRENCIES.map((item) => {
							return(
							<div key={item} className='pop-rate-item'>{item.toUpperCase()}: {amount * Number(rates[item] || 0)}</div>)
						})	
						}
						</div>
						)}

					</div>
				</>
			)}
		</div>
	)
}

export default App
