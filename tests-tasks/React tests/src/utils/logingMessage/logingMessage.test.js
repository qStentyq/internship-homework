import logingMessage from './logingMessage';
import { describe, it, expect, vi } from 'vitest';



describe('logingMessage', () => {
    it('should console log a message (called 1 time)', () => {
       
        const mockLog = vi.fn((name) => `Hello ${name}`);
        const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(mockLog);
        const result = logingMessage('John Doe');
        expect(consoleLogMock).toBeCalledTimes(1);
        expect(result).toBe('John Doe');

        consoleLogMock.mockRestore();

    });


});