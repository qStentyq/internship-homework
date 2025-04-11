import messageWithTimeout from './setTimeoutFunc'
import  {waitFor} from '@testing-library/react'

describe('setTimeout tests',  () =>
{
    it('waiting for timeout to view results', async () => {
        
        const exceptedResult = 'Hello, test'
        const result = await messageWithTimeout('Hello, test')

        await waitFor(() => expect(result).toEqual(exceptedResult))

        console.log(result)
        expect(result).toEqual(exceptedResult)


    })
})