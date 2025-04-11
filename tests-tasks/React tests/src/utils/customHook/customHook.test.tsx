import useFetchData from './customHook'
import {vi} from 'vitest'
import {expect, it} from 'vitest'

import { renderHook, waitFor } from '@testing-library/react'

describe('useFetchData hook tests', () => {
    it('mocking custom hook', async () => {
        const mockData = 'https://dummyjson.com/test'
        const mockFetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        )
        global.fetch = mockFetch as unknown as typeof fetch

        const { result } = renderHook(() =>
            useFetchData({ dataResource: 'https://jsonplaceholder.typicode.com/posts/1' })
        )

        await waitFor(() => expect(result.current).toEqual(mockData))

        console.log(result.current)
        expect(result.current).toEqual(mockData)
        expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1')
    })
    it('mocking an API with error', async () => {

        const { result } = renderHook(() =>
            useFetchData({ dataResource: 'https://111.com' })
        )

        await waitFor(() => expect(result.current.error).toBe(undefined))

        console.log(result.current)
      


    })
})
