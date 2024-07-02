import React from 'react'

import Home, { HomeProps } from '@/home'

/**
 * FIXME: 예시 코드로 초기 프로젝트 설정 후 삭제하세요.
 */
export default function HomePage({ todos }: HomeProps) {
  return <Home todos={todos} />
}

HomePage.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = (await res.json()) as unknown[]

  return { todos: todos.slice(0, 5) }
}
