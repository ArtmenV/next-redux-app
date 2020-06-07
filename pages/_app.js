// import App from 'next/app'
// import * as React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
// import { createWrapper } from 'next-redux-wrapper'
// import store from '../store'

export default function App({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>
  )
}