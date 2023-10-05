import ConnectWalletBtn from '../../components/ConnectWallet/ConnectWallet';
import Logo from '../../assets/whale_logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ isMetamaskInstalled, connectWallet, account, signer }: 
    { isMetamaskInstalled: boolean; connectWallet: any; account: string | null; signer: any;}) {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const history = useNavigate();
    
    return (
        <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-blue-color to-secondary-color text-white border-b-2 border-gray-200">
            <div className="container mx-auto px-10 py-2 flex justify-between items-center cursor-pointer">
                <img className="h-[5vh] p-[5px] md:h-[5vh] lg:h-[7vh]" src={Logo} alt={"whale finance"} onClick={() => history('/')}/>

                {/* responsivo */}

                <div className="block lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-color hover:border-blue-color appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                {/* sidebar menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-secondary-color">
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button onClick={() => setIsMenuOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Close sidebar</span>
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <nav className="mt-5 flex-1 px-2 space-y-1">
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/investor')}>
                                        Dashboard
                                    </div>
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/manager')}>
                                        Manager
                                    </div>
                                    <div className="group flex items-center px-4 py-3 text-xl font-medium rounded-md text-white hover:text-secondary-color hover:bg-gray-100" onClick={() => history('/fundslist')}>
                                        Funds List
                                    </div>
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                <ConnectWalletBtn
                                    isMetamaskInstalled={isMetamaskInstalled}
                                    connectWallet={connectWallet}
                                    account={account}
                                    signer={signer}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* menu */}

                <div className="hidden lg:block">
                <ul className="inline-flex items-center space-x-10">
                <li><div className="px-6 lg:px-6 py-2 text-[1.23vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out"
                        onClick={() => history('/investor')}>Dashboard</div></li>
                    <li><div className="px-6 lg:px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out"
                    onClick={() => history("/manager")}>Manager</div></li>
                    <li><div className="px-6 lg:px-6 py-2 text-[1.25vw] hover:bg-[rgb(14,42,98)] transition duration-1000 ease-in-out" 
                    onClick={()  => history("/fundslist")} >Funds List</div></li>
                    <ConnectWalletBtn
                        isMetamaskInstalled={isMetamaskInstalled}
                        connectWallet={connectWallet}
                        account={account}
                        signer={signer}
                    />
                </ul>
                </div>
            </div>
        </header>
    );
};