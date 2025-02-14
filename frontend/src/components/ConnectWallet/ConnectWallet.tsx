export default function ConnectWalletBtn({ isPhantomInstalled, connectWallet, account, signer }: { isPhantomInstalled: boolean; connectWallet: any; account: string | null; signer: any}) {

    return (
        <>
            {
                isPhantomInstalled ? (
                    <div
                        onClick={connectWallet}
                        className='w-[48vw] md:w-[24vw] lg:w-[16vw] right-[3vw] p-3 shadow-md font-bold bg-white hover:bg-blue-color text-secondary-color hover:text-white rounded-full cursor-pointer transition duration-1000 ease-in-out'
                    >
                        <h3 className='flex justify-center truncate'>{signer ? "Wallet Connected: " +
                            account?.substring(0, 5) +
                            "..." +
                            account?.substring(39, 42) : "Connect Wallet"}</h3>
                    </div>
                ) : (
                    <div
                        className='w-[48vw] md:w-[24vw] lg:w-[16vw] right-[3vw] p-3 shadow-md font-bold bg-white hover:bg-blue-color text-secondary-color hover:text-white rounded-full cursor-pointer transition duration-1000 ease-in-out'
                    >
                        <a href="https://phantom.app/download">Install Phantom</a>
                    </div>
                )
            }
        </>
    )
}