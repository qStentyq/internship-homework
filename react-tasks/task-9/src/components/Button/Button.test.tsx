import Button from "./Button";
import {vi, describe, it, expect} from 'vitest'
import '@testing-library/jest-dom'
import { render, fireEvent,screen } from "@testing-library/react";

// vi.mock("./Button", () => ({
//     default: vi.fn()
// }))

describe('Button tests', () => {

    it('Renders button correctly', () => {
  
        const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
        const {getByText} =render(<Button text={'Test button'} color="green" onClickCustom={() => {console.log(1)}}/>)

        expect(getByText(/Test button/i)).toBeInTheDocument()
        
       
        fireEvent.click((getByText(/Test button/i)))
        expect(logSpy).toHaveBeenCalledWith(1)
       
    })
    
    
})



