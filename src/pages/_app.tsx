import '../styles/global.css';

import { ChallengesProvider } from '../components/contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider value={'teste'}>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
