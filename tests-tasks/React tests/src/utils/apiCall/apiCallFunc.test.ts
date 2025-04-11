import apiCallFunc from "./apiCallFunc";
import { describe, it, expect, vi } from 'vitest';

describe("apiCallFunc", () => {
    it('mock fetch', async () => {
        const mockFetch = vi.fn(() => Promise.resolve({
            json: () => Promise.resolve({ message: 'Success' })
        }));
        // @ts-except-error sss
        global.fetch = mockFetch as any;

        const apiLink = 'https://dummyjson.com/test';
        await apiCallFunc(apiLink);

        expect(mockFetch).toHaveBeenCalledWith(apiLink);
    }
    );
})