import '../styles/global.css';

import { challengesProvider } from '../components/contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <challengesProvider>
      <Component {...pageProps} />
    </challengesProvider>
  )
}

export default MyApp
