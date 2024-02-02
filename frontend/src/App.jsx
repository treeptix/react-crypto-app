import AppLoyout from './components/layout/AppLoyout';
import { CryptoContextProvider } from './context/crypto-context';



export default function App() {
  return (
    <CryptoContextProvider>
      <AppLoyout />
    </CryptoContextProvider>

  );
};

