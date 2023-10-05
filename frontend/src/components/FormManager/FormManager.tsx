import { allowedTokens } from "../../utils/addresses";

export default function FormInvestor(props: any) {

    return (
        <div className='my-12'>
            <div>
                <div className="mb-4 text-secondary-color">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2" htmlFor="name">
                                What will be the name of your fund?
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Name'
                                value={props.name}
                                onChange={(e) => props.setName(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6 md:mt-0 lg:mt-0" htmlFor="ticker">
                                What will be its ticker representation?
                            </label>
                            <input
                                type="text"
                                id="ticker"
                                name="ticker"
                                placeholder='Ticker'
                                value={props.ticker}
                                onChange={(e) => props.setTicker(e.target.value)}
                                className="bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-12 lg:space-x-12">
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="admFee">
                                What will be the admin fee (in %)?
                            </label>
                            <input
                                type="number"
                                id="admFee"
                                name="admFee"
                                placeholder='Admin Fee'
                                value={props.admFee}
                                onChange={(e) => props.setAdmFee(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="perfFee">
                                What will be the performance fee (in %)?
                            </label>
                            <input
                                type="percentage"
                                id="perfFee"
                                name="perfFee"
                                placeholder='Performance Fee'
                                value={props.perfFee}
                                onChange={(e) => props.setPerfFee(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                            </div>
                        </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:space-x-12 lg:space-x-12">
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="openInvestment">
                                Choose the start time for investments
                            </label>
                            <input
                                type="date"
                                id="openInvestment"
                                name="openInvestment"
                                placeholder='Open Investment'
                                value={props.openInvestment}
                                onChange={(e) => props.setOpenInvestment(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="closeInvestiment">
                                Choose the end time for investments
                            </label>
                            <input
                                type="date"
                                id="closeInvestiment"
                                name="closeInvestiment"
                                placeholder='Close Investment'
                                value={props.closeInvestiment}
                                onChange={(e) => props.setCloseInvestiment(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="maturationTime">
                                Choose the date of maturation
                            </label>
                            <input
                                type="date"
                                id="maturationTime"
                                name="maturationTime"
                                placeholder='Maturation Time'
                                value={props.maturationTime}
                                onChange={(e) => props.setMaturationtime(e.target.value)}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-full outline-0 shadow-lg hover:bg-gray-100 transition duration-1000 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="flex flex-col md:w-[50%] lg:w-[50%]">
                            <label className="block font-medium md:text-xl lg:text-xl mb-2 mt-6" htmlFor="tokens">
                                Choose the tokens you want to accept
                            </label>
                            <select
                                id="tokens"
                                name="tokens"
                                placeholder='Tokens'
                                value={props.tokens}
                                // I have multiple tokens, so I need to set multiple to true

                                onChange={(e) =>{
                                    const selected = [...Array.from(e.target.selectedOptions).map((option) => option.value)];
                                    const newTokens = [...props.tokens]
                                    for(let i = 0; i < selected.length; i++){
                                        if(!newTokens.includes(selected[i])){
                                            newTokens.push(selected[i])
                                        } else {
                                            newTokens.splice(newTokens.indexOf(selected[i]), 1)
                                        }
                                    }
                                    props.setTokens([...newTokens]);

                                }}
                                className=" bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] outline-0 shadow-lg "
                                multiple={true}
                            >
                                {Object.keys(allowedTokens).map((tokenName: string, idx: number) => {
                                    return(
                                    <option 
                                    className="bg-white md:text-xl lg:text-xl text-center text-black p-2 mt-4 rounded-[10px] border-blue-color border-2 outline-0 shadow-lg focus:bg-secondary-color focus:text-white hover:bg-gray-100 transition duration-1000 ease-in-out"
                                    key={idx}
                                    value={allowedTokens[tokenName]}>{tokenName}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}