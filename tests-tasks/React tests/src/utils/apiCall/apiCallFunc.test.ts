import apiCallFunc from "./apiCallFunc";
import { describe, it, expect, vi } from "vitest";

describe("apiCallFunc", () => {
  it("mock fetch with success", async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Success" }),
      })
    );

    global.fetch = mockFetch as unknown as typeof fetch;

    const apiLink = "https://dummyjson.com/test";
    await apiCallFunc(apiLink);

    expect(mockFetch).toHaveBeenCalledWith(apiLink);
  });
  it("mock fetch with failure", async () => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.reject({ message: "Failed to fetch" }),
      })
    );

    global.fetch = mockFetch as unknown as typeof fetch;

    const apiLink = "https://dummyjson.com/test";
    await apiCallFunc(apiLink);

    expect(mockFetch).toHaveBeenCalledWith(apiLink);
  });
});
