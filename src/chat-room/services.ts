export async function postMessage({ message }: { message: string }) {
  const response = await fetch(
    'https://orange-computing-machine-5xx9r7jp54jh7jv7-8082.app.github.dev/score',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: message,
      }),
    },
  )

  const { result } = await response.json()

  console.log('result', result)

  return result
}
