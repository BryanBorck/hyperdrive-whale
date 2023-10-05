export default function FormInvestor(props: any) {
    return (
        <div className='my-8'>
            <div>
                <div className="mb-4 text-secondary-color">
                    <label className="block font-medium text-xl mb-2" htmlFor="invest">
                        How many BTTCUSD do you want to invest?
                    </label>
                    <input
                        type="number"
                        id="invest"
                        name="invest"
                        placeholder='Qty of BTTCUSD'
                        value={props.invest}
                        onChange={(e) => props.setInvest(e.target.value)}
                        className="w-full bg-[white] text-center text-xl text-black p-2 mt-2 rounded-full outline-0 shadow-md hover:bg-gray-100 transition duration-600 ease-in-out focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
}