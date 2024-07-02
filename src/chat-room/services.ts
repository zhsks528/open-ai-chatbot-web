export async function postMessage({ message }: { message: string }) {
  const response = await fetch('/azure-api/score', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: message,
    }),
  })

  return response
}
