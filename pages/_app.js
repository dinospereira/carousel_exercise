import '../styles/globals.css'
import { CarouselProvider } from '../contexts/carousel';

function MyApp({ Component, pageProps }) {
  return (
    <CarouselProvider>
      <Component {...pageProps} />
    </CarouselProvider>
  );
}

export default MyApp
