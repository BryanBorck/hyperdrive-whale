import { useEffect, useState } from "react";
import { SwapRouter, WhaleFinanceAddress, allowedTokens } from "../../utils/addresses";
import { ethers } from "ethers";
import { QuotaTokenAbi } from "../../contracts/QuotaToken";
import { WhaleFinanceAbi } from "../../contracts/WhaleFinance";
import { SafeAccountAbi } from "../../contracts/SafeAccount";

export default function FormSwap(props: any) {

    const [tokenABalance, setTokenABalance] = useState(0);
    const [tokenBBalance, setTokenBBalance] = useState(0);

    const [amount, setAmount] = useState(0);
    // const [loading, setLoading] = useState(false);

    async function getBalances() {
        try{
            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress, WhaleFinanceAbi, props.signer);
            const fundAddresses = await whaleFinanceContract.functions.fundsAddresses(props.fundId);

            const tokenAContract = new ethers.Contract(allowedTokens[props.tokenA], QuotaTokenAbi, props.signer);
            const tokenABalance: ethers.BigNumber = await tokenAContract.balanceOf(fundAddresses[0]);

            console.log(parseFloat(tokenABalance._hex))
            
            setTokenABalance(Number(ethers.utils.formatEther(tokenABalance)));

            const tokenBContract = new ethers.Contract(allowedTokens[props.tokenB], QuotaTokenAbi, props.signer);
            const tokenBBalance: ethers.BigNumber = await tokenBContract.balanceOf(fundAddresses[0]);
            setTokenBBalance(Number(ethers.utils.formatEther(tokenBBalance)));

        } catch(err){
            console.log(err);
        }
    }

    async function makeSwap(){
        if(props.tokenA === props.tokenB){
            alert("Please choose different tokens!");
            return;
        }

        if(props.tokenA <= 0){
            alert("Please choose a valid amount!");
            return;
        }

        if(props.tokenA > tokenABalance){
            alert("You don't have enough balance!");
            return;
        }

        // setLoading(true)

        try{
            const tokenAAddress = allowedTokens[props.tokenA];
            const tokenBAddress = allowedTokens[props.tokenB];

            const whaleFinanceContract = new ethers.Contract(WhaleFinanceAddress, WhaleFinanceAbi, props.signer);
            const fundAddress = await whaleFinanceContract.functions.fundsAddresses(props.fundId);

            let path: any[] = [];

            if(tokenAAddress == allowedTokens["WZENIQ"] || tokenBAddress == allowedTokens["WZENIQ"]){
                path = [tokenAAddress, tokenBAddress];
            } else {
                path = [tokenAAddress, allowedTokens["WZENIQ"], tokenBAddress];
            }

            const fundContract = new ethers.Contract(fundAddress[0], SafeAccountAbi, props.signer);

            const txApprove = await fundContract.functions.executeApprove(tokenAAddress, SwapRouter, ethers.utils.parseEther(String(100000000000000000000*amount)));

            await txApprove.wait();

            const txSwap = await fundContract.functions.executeSwapExactTokensForTokens(
                ethers.utils.parseEther(String(amount)), 0, path, props.account, Math.floor(Date.now() / 1000) + 3600,
                {gasLimit: 10000000}
            );

            await txSwap.wait();

            console.log(txSwap);

        } catch(err){
            console.log(err);
        } finally{
            // setLoading(false);
        }
    }

    useEffect(() => {
        getBalances();
    },[props.signer, props.tokenA, props.tokenB]);


    return (
        <div className='my-4'>
            <div>
                <div className="mb-4 text-secondary-color">
                    <label className="block font-medium italic text-sm text-gray-400 mb-8" htmlFor="invest">
                        Choose your tokens to swap
                    </label>
                    <div className="flex flex-row text-center text-sm text-blue-color italic font-bold mt-4 ml-8">
                        <h3>Balance: {Number(tokenABalance).toFixed(3)} {props.tokenA} </h3>
                    </div>
                    <div className="flex flex-row bg-[white] border-[2px] border-secondary-color text-center text-xl text-black mt-4 shadow-lg rounded-[15px]">
                        <input
                            type="number"
                            id="invest"
                            name="invest"
                            placeholder={`Qty of ${props.tokenA}`}
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="basis-2/3 bg-transparent text-center lg:text-xl text-black p-2 outline-0 rounded-l-[15px] hover:bg-slate-100 transition duration-600 ease-in-out"
                        />
                        <select 
                            className="basis-1/3 bg-transparent text-center lg:text-xl font-bold text-black p-2 outline-0 rounded-r-[15px] hover:bg-slate-100 transition duration-1000 ease-in-out"
                            id="tokens"
                            name="tokens"
                            placeholder='Tokens'
                            value={props.tokenA}
                            onChange={(e) => props.setTokenA(e.target.value)}
                        >
                            {Object.keys(allowedTokens).map((key) => { 
                                return (
                                    <option 
                                        key={key}
                                        value={key}
                                        className="bg-white lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] border-blue-color border-2 outline-0 shadow-lg focus:bg-secondary-color focus:text-white hover:bg-gray-100 transition duration-1000 ease-in-out"
                                    >{key}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-row bg-[white] border-[2px] border-secondary-color text-center text-xl text-black mt-4 shadow-lg rounded-[15px]">
                        <div className="basis-2/3 bg-transparent text-center lg:text-xl text-black p-2 outline-0 rounded-l-[15px] ">
                            <h3>Balance:  {Number(tokenBBalance).toFixed(3)} {props.tokenB}</h3>
                        </div>
                        <select 
                            className="basis-1/3 bg-transparent text-center lg:text-xl font-bold text-black p-2 outline-0 rounded-r-[15px] hover:bg-slate-100 transition duration-1000 ease-in-out"
                            id="tokens"
                            name="tokens"
                            placeholder='Tokens'
                            value={props.tokenB}
                            onChange={(e) => props.setTokenB(e.target.value)}
                        >
                        {Object.keys(allowedTokens).map((key) => { 
                                return (
                                    <option 
                                        key={key}
                                        value={key}
                                        className="bg-white lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] border-blue-color border-2 outline-0 shadow-lg focus:bg-secondary-color focus:text-white hover:bg-gray-100 transition duration-1000 ease-in-out"
                                    >{key}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <button
            className="my-4 bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out"
            onClick={makeSwap}
            >
            Swap
            </button>
        </div>
    );
}