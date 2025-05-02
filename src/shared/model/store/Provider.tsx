'use client'

import { Notice } from '@/widgets'
import { Provider } from 'react-redux'
import store from './store'

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      {children}
      <Notice />
    </Provider>
  )
}
