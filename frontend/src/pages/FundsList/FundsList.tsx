import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { get, ref } from "firebase/database";
import { Link } from 'react-router-dom';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Footer from '../../components/Footer/Footer';
import { getMetamaskProvider } from '../../utils/connectMetamask';
import { ethers } from 'ethers';
import { WhaleFinanceAbi } from '../../contracts/WhaleFinance';
import { WhaleFinanceAddress } from '../../utils/addresses';

type DataPoint = {
    id: number;
    name: string;
    description: string;
};

export default function FundsList() {

    const [funds, setFunds] = useState<DataPoint[]>([]);
    const [fundsData, setFundsData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const dbRef = ref(db, 'Funds');
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
              const fbData = snapshot.val();
              setFundsData(fbData);
            } else {
              console.log("No data available");
            }
          } catch (error) {
            console.error("Error reading data:", error);
          }
        };

        const getFunds = async () => {
            try{
                await fetchData();
                const provider = getMetamaskProvider() as ethers.providers.Web3Provider;
                const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress, WhaleFinanceAbi, provider);
                const numberFundsBigNumber = await whaleFinanceContract.functions._fundIdCounter() as ethers.BigNumber[];
                const numberFunds = parseInt(numberFundsBigNumber[0]._hex);
                console.log(numberFunds);

                const fundsList: DataPoint[] = [];

                await Promise.all(Array(numberFunds).fill(null).map(async (_, index) => {
                    const fundName = await whaleFinanceContract.functions.fundsNames(index);
                    console.log(fundName);
                    const oneFund: DataPoint = {
                        id: index,
                        name: fundName,
                        description: ""
                    };
                    fundsList.push(oneFund);
                                       
                }));

                setFunds([...fundsList]);
                //make the size of fundsData equal to the size of funds

            } catch(err){
                console.log("Error");
                console.log(err);
            }
        }
      
        getFunds();
    }, []);

    function formatToUSD(number: number) {
        const formattedNumber = new Intl.NumberFormat('en-US', { 
          style: 'currency', 
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(number / 1000000); // Convert to millions
      
        return `${formattedNumber} mi`;
    }


    const rentValue = (num: number) => num;
    

    const fundsElements = funds.map((fund, idx) => 
    {   
        
        console.log("data", fundsData);
        let apy = 0.10;
        let tvl = 100000000;
        if(fundsData[idx]){
            apy = rentValue(fundsData[idx].Performance);
            tvl = fundsData[idx].TVL;
            
        }
        const formattedRent = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(apy);

        return(<Link to={`/fundslist/${fund.id}`}>
            <div key={fund.id} className="bg-gradient-to-r from-white to-[#fcfcfc] h-[180px] flex flex-col items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh] hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-secondary-color transition duration-600 ease-in-out">
                <h2 className="text-xl font-bold text-secondary-color">{fund.name}</h2>
                <p className="text-fs mt-2">{fund.description}</p>
                <div className="grid grid-cols-3 space-x-4 mt-4 w-[80%]">
                    <div className="">
                        <p className='text-xl text-black font-bold'>{formatToUSD(tvl)}</p>
                        <p>TVL</p>
                    </div>
                    <div className="">
                        <p className='text-xl text-black font-bold'>100</p>
                        <p>Investors</p>
                    </div>
                    <div className="fl">
                        <div className='flex flex-row items-center justify-center space-x-1'>
                            <p className={`text-xl font-bold ${apy > 0 ? 'text-green-500' : apy < 0 ? 'text-red-500' : 'text-black'}`}>
                                {formattedRent} 
                            </p>
                            {apy > 0 ? <AiOutlineArrowUp color="rgb(34 197 94)" size={20}/> : apy < 0 ? <AiOutlineArrowDown color="rgb(249 115 22)" size={20}/> : ''}
                        </div>
                        <p>APY</p>
                    </div>
                </div>
            </div>
        </Link>
    )});

    const loadingElements = Array(4).fill(null).map((_, index) => (
        <div key={index} className="bg-gradient-to-r from-white to-[#f6f6f6] h-[180px] opacity-80 flex items-center justify-center text-gray-500 rounded-lg shadow-lg m-[2vh]">
        </div>
    ))

    return (
        <>
            <div className='w-[100vw] h-[100vh] text-gray-700 bg-[#fcfcfc] overflow-y-auto'>
                <section className="">
                    <div className="container mx-auto px-0 text-center py-12 md:px-6 lg:px-6">
                        <h2 className="mb-2 text-4xl font-bold text-center text-secondary-color">
                        Funds List
                        </h2>
                        <div className='grid grid-cols-1 justify-center my-12 cursor-pointer md:grid-cols-2 lg:grid-cols-3'>
                            {funds.length ? fundsElements : loadingElements }
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}