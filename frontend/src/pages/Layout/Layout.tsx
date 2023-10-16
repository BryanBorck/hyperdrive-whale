import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout({ isPhantomInstalled, connectWallet, account, signer }: 
    { isPhantomInstalled: boolean; connectWallet: any; account: string | null; signer: any;}) {

    return (
        <div className='w-[100vw] h-[100vh] bg-[#f6f6f6] overflow-hidden'>
            <Header
                isPhantomInstalled={isPhantomInstalled}
                connectWallet={connectWallet}
                account={account}
                signer={signer}
            />
            <Outlet/>
        </div>
    )
}