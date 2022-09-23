import { ThemeProvider } from 'next-themes'
import Home from '.'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Home>
        <Component {...pageProps} />
      </Home>
    </ThemeProvider>
  )
}

export default MyApp
