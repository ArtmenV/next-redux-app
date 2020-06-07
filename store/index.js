import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

let store

function initStore(initState) {
  return createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line
  let _store
  if (store) {
    _store = store
  } else {
    _store = initStore(preloadedState)
  }
  // let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
