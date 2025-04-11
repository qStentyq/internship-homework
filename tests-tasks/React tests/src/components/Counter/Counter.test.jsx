import Counter from './Counter';
import CounterChild from '../CounterChild/CounterChild';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

describe(Counter, () => {
    it('counter displays correctly', () => {
        const {getByText,getByTestId}=render(<Counter />);
        let countValue = Number(getByTestId('count').textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(getByText('Increment'));
        countValue = Number(getByTestId('count').textContent);
        expect(countValue).toEqual(1);
        
})
    it('Mocking a child component', () => {

        vi.mock('./CounterChild', () => {
            // console.log(1)
            const returnZero = vi.fn()
            const MockedCounterChild = () => {
                returnZero.mockImplementation(() => console.log(0));
                return 0;
            };
            
            MockedCounterChild.returnZero = returnZero
            return {
                __esModule: true,
                default: MockedCounterChild
            }
        })


        render(<Counter/>)
        CounterChild.returnZero
        
       
        
        
        
    })

})

