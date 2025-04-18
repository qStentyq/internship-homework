import { useEffect, useState } from 'react'
import Select from 'react-select'
import './App.css'
import { fetchDataFromApi } from './services/converterApi'

function App() {
	const [apiData, setApiData] = useState(null)
	const [curRateHistory, setCurRateHistory] = useState({})
	const [fromCurrency, setFromCurrency] = useState('mdl')
	const [toCurrency, setToCurrency] = useState('usd')
	const [rates, setRates] = useState(null)
	const [amount, setAmount] = useState(null)
	const [result, setResult] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const apiDataResp = await fetchDataFromApi('latest/v1/currencies.json')
			const curDefault = await fetchDataFromApi(`latest/v1/currencies/${fromCurrency}.json`)
			setRates(curDefault[fromCurrency])
			// console.log(apiDataResp)
			setApiData(
				Object.entries(apiDataResp).map(([value, label]) => ({ value, label }))
			)
			await fetchHistory(fromCurrency).catch()
		}
		if (!apiData) {
			fetchData().catch()
		}
	}, [apiData])

	useEffect(() => {
		if (rates && amount && toCurrency) {
			// console.log(rates, toCurrency, amount * rates[toCurrency])
			if (rates[toCurrency]) {
				setResult(amount * rates[toCurrency])
			}
		}
	}, [rates, amount, toCurrency])

	const swapChanges = async e => {
		e.preventDefault()
		const temp = fromCurrency
		setFromCurrency(toCurrency)
		setToCurrency(temp)

		await fetchCurrency(toCurrency)
	}

	const fromInputHandler = e => {
		e.preventDefault()
		setAmount(e.target.value)
	}

	const fetchCurrency = async currency => {
		setCurRateHistory(null)
		const currencyData = await fetchDataFromApi(`latest/v1/currencies/${currency}.json`)
		// console.log(currencyData[currency])
		setRates(currencyData[currency])

		//fetch history
		await fetchHistory(currency).catch()
		return currencyData
	}

	const fetchHistory = async currency => {
		for (let i = 0; i < 10; i++) {
			let date = new Date()
			date.setDate(date.getDate() - i)
			let formattedDate = date.toISOString().split('T')[0]
			// console.log(formattedDate)
			const dayData = await fetchDataFromApi(`${formattedDate}/v1/currencies/${currency}.json`)
			setCurRateHistory(prevState => ({
				...prevState,
				[formattedDate]: dayData[currency],
			}))
			// console.log(curRateHistory)
		}
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
						<Select
							onChange={selected => {
								setFromCurrency(selected?.value)
								fetchCurrency(selected?.value)
							}}
							classNamePrefix='select'
							value={apiData.find(option => option.value === fromCurrency)}
							isSearchable={true}
							name='exchange-1'
							options={apiData}
							className='basic-single'
							placeholder='Select From Currency'
						/>
						<input
							type='number'
							name='cur-1'
							id='cur-1'
							value={amount}
							onChange={fromInputHandler}
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
						<Select
							onChange={selected => {
								setToCurrency(selected?.value)
								fetchHistory(fromCurrency)
							}}
							className='basic-single'
							classNamePrefix='select'
							value={apiData.find(option => option.value === toCurrency)}
							isSearchable={true}
							name='exchange-2'
							options={apiData}
							placeholder='Select To Currency'
						/>
						<input
							type='number'
							name='cur-2'
							id='cur-2'
							disabled
							value={result}
							placeholder='Converted Amount'
						/>
					</div>
					{curRateHistory ? (
						<div className='card history fade-in'>
							<h2>История курсов</h2>
							<div className='history-list'>
								{Object.entries(curRateHistory).map(([date, rate]) => (
									<div key={date} className='history-item'>
										<span className='history-date'>
											{new Date(date).toLocaleDateString('ru-RU')}
										</span>
										<span className='history-value'>
											{rate[toCurrency] 
												? `${(amount * rate[toCurrency]).toFixed(
														2
												  )} ${toCurrency.toUpperCase()}`
												: 'Нет данных'}
										</span>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className='card loading skeleton'>
							<h2>Загрузка истории...</h2>
						</div>
					)}
					<div className='popular_rates'>
						<div className="rate_container toast ">
						Rates vs most popular currencies:
						<div className='pop-rate-item'>MDL: {amount * Number(rates['mdl'])}</div>
						<div className='pop-rate-item'>USD: {amount * Number(rates['usd'])}</div>
						<div className='pop-rate-item'>EUR: {amount * Number(rates['eur'])}</div>
						<div className='pop-rate-item'>RON: {amount * Number(rates['ron'])}</div>

						</div>

					</div>
				</>
				
			)}
		</div>
	)
}

export default App
