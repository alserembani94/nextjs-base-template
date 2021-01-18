import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
