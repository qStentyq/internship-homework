export const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@'

export async function fetchDataFromApi(path = '') {
    try {
    const response = await fetch(
            `${BASE_URL}${path}`
        )
    const data = await response.json()
    return data
    }
    catch {
        return new Error("Couldn't fetch data properly, try again")
    }
}