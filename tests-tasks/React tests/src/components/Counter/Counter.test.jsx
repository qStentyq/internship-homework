import Counter from './Counter';
import { fireEvent, getByText, render, screen } from '@testing-library/react';

describe(Counter, () => {
    it('counter displays correctly', () => {
        const {getByText,getByTestId}=render(<Counter />);
        let countValue = Number(getByTestId('count').textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(getByText('Increment'));
        countValue = Number(getByTestId('count').textContent);
        expect(countValue).toEqual(1);
        
})})