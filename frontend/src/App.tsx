import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { connectPhantom, getPhantomProvider } from './utils/connectPhantom'
import Layout from './pages/Layout/Layout';
import Manager from './pages/Manager/Manager';
import FundId from './pages/FundId/FundId';
import CreateFund from './pages/CreateFund/CreateFund';
import DashboardId from './pages/DashboardId/DashboardId';
import FundsList from './pages/FundsList/FundsList';
import Investor from './pages/Investor/Investor';
import SuccessInvestment from './pages/SuccessInvestment/SuccessInvestment';
import SuccessFund from './pages/SuccessFund/SuccessFund';

function App() {

  //handle Metamask wallet connection
  const [isPhantomInstalled, setisPhantomInstalled] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string | null>(null);
  const [provider, setProvider] = React.useState<any>(null);
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    if ('phantom' in window) {
      setisPhantomInstalled(true);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    const connection = await connectPhantom();
    if (connection) {
      console.log("Connected to Phantom with address:", connection.address);
      setAccount(connection.address);
    } else {
      setAccount(null); 
    }
    setProvider(getPhantomProvider());
    if (!provider) {
      console.error("No provider available. Make sure Phantom is installed.");
      return;
    }
    // setSigner(connection?.web3Signer);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
              isPhantomInstalled={isPhantomInstalled}
              connectWallet={connectWallet}
              account={account}
              signer={signer}
            />
          }>
            <Route path="/" element={<Home />} />
            <Route path="/fundslist" element={<FundsList />} />
            <Route path="/fundslist/:id" element={
            <FundId
              account={account}
              provider={provider}
              signer={signer}
            
            />} 
            />
            <Route path="/successinvestment" element={<SuccessInvestment />} />
            <Route path="/manager" element={
              <Manager 
                account={account}
                provider={provider}
                signer={signer}
              />} 
              />
            <Route path="/manager/:id" element={
              <DashboardId 
                account={account}
                signer={signer}
              />} 
            />
            <Route path="/successfund" element={<SuccessFund />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/create-fund" element={
              <CreateFund
              isPhantomInstalled={isPhantomInstalled}
              account={account}
              signer={signer}
              />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App