export default function messageWithTimeout(
  message: string,
  timeout: number = 2000
): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), timeout);
  });
}
