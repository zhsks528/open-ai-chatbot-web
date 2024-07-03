export async function postMessage({
  message,
  selectedProductId,
}: {
  message: string
  selectedProductId: string
}) {
  console.log('selectedProductId', selectedProductId)

  const response = await fetch(
    'https://orange-computing-machine-5xx9r7jp54jh7jv7-8082.app.github.dev/score',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: message,
        ...(selectedProductId && { prod_cd: selectedProductId }),
      }),
    },
  )

  const { result } = await response.json()

  console.log('result', result)

  return result
}

// prod-id
