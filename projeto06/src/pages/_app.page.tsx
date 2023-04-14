import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function App({
  Component,
  pageProps: { sesion, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={sesion}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
