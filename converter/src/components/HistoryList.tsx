import React from 'react';

interface HistoryParams {
  history: object;
  amount: number;
  toCurrency: string;
}
function HistoryList({ history, amount, toCurrency }: HistoryParams) {
  return (
    <div className='history-list'>
      {Object.entries(history).map(([date, rate]) => (
        <div key={date} className='history-item'>
          <span className='history-date'>
            {new Date(date).toLocaleDateString('ru-RU')}
          </span>
          <span className='history-value'>
            {rate[toCurrency]
              ? `${(amount * rate[toCurrency]).toFixed(
                  2,
                )} ${toCurrency.toUpperCase()}`
              : 'Нет данных'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
