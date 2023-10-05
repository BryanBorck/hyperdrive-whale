import React from 'react';
import FormManager from '../../components/FormManager/FormManager';
import Footer from '../../components/Footer/Footer';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnim from '../../assets/loading.json';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { WhaleFinanceAbi } from '../../contracts/WhaleFinance';
import { WhaleFinanceAddress } from '../../utils/addresses';

export default function CreateFund({ isMetamaskInstalled, account, signer }: 
    { isMetamaskInstalled: boolean; account: string | null; signer: any;}) {

    const history = useNavigate();

    const [name, setName] = React.useState('');
    const [ticker, setTicker] = React.useState('');
    const [admFee, setAdmFee] = React.useState(0.5);
    const [perfFee, setPerfFee] = React.useState(10);
    
    const [openInvestment, setOpenInvestment] = React.useState("");
    const [closeInvestiment, setCloseInvestiment] = React.useState("");
    const [maturationTime, setMaturationtime] = React.useState("");

    const [tokens, setTokens] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    function handleDateTimestamp(date: string) {
        const dateObj = new Date(date);
        const timestamp = dateObj.getTime()/1000;
        return timestamp;
    }


    async function handleSubmit() {
        if(openInvestment === "" || closeInvestiment === "" || maturationTime === "") {
            alert("Please fill all the fields");
            return;
        }
        if(!isMetamaskInstalled){
            alert("Please install Metamask");
            return;
        }
        if(!signer){
            alert("Please connect your wallet");
            return;
        }
        if(tokens.length === 0){
            alert("Please add at least one token");
            return;
        }
        setLoading(true);

        const openInvestmentTimestamp = handleDateTimestamp(openInvestment);
        const closeInvestimentTimestamp = handleDateTimestamp(closeInvestiment);
        const maturationTimeTimestamp = handleDateTimestamp(maturationTime);

        const admFeeBps = admFee * 100;
        const perfFeeBps = perfFee * 100;

        try{
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress, WhaleFinanceAbi, signer);
            const txNewFund = await whaleFinanceContract.createFund(
                name,
                ticker, 
                account, 
                tokens, 
                admFeeBps, 
                perfFeeBps,
                openInvestmentTimestamp,
                closeInvestimentTimestamp,
                maturationTimeTimestamp
            );

            await txNewFund.wait();
            history('/successfund');

        } catch(err){
            console.log(err);
            alert("Something went wrong! Try again");
            

        }finally{
            setLoading(false);
        }   
    }

    const handleClick = async () => {
        await handleSubmit();
    };

    return (
        <>
            <div className='h-screen w-[100vw] text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-0 text-center py-12 mb-2 md:px-6 lg:px-6">
                        <h2 className="text-4xl font-bold text-center text-secondary-color">
                        Fund Creation Page
                        </h2>
                        <div className='flex flex-row justify-center mt-10 mb-10'>
                            <div className='w-[100%] mx-6 px-10 pb-6 shadow-lg text-secondary-color bg-white rounded-[20px]'>
                                <FormManager    name={name}
                                                setName={setName}
                                                ticker={ticker}
                                                setTicker={setTicker}
                                                admFee={admFee}
                                                setAdmFee={setAdmFee}
                                                perfFee={perfFee}
                                                setPerfFee={setPerfFee}
                                                openInvestment={openInvestment}
                                                setOpenInvestment={setOpenInvestment}
                                                closeInvestiment={closeInvestiment}
                                                setCloseInvestiment={setCloseInvestiment}
                                                maturationTime={maturationTime}
                                                setMaturationtime={setMaturationtime}
                                                tokens={tokens}
                                                setTokens={setTokens}
                                />
                                <button
                                className="bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={handleClick}
                                >
                                {loading ? 'Loading...' : 'Create'}
                                </button>
                                <div className='w-full flex justify-center items-center'>
                                    <div className='w-[100px] h-[25px] my-4'>
                                        {loading ? 
                                        <Player
                                            src={LoadingAnim}
                                            className="player"
                                            loop
                                            autoplay
                                        />
                                        : <></>}  
                                    </div>
                                </div>                                                              
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}