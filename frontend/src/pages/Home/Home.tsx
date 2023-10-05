import { useNavigate } from 'react-router-dom';
import LogoApp from '../../assets/whale_app_logo.png';
import Footer from '../../components/Footer/Footer';

export default function Home() {

    const history = useNavigate();

    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#fcfcfc] overflow-y-auto'>
                <section className='w-full flex flex-col items-center'>
                    <div className="w-full h-[90vh] flex flex-col justify-center items-center bg-cover bg-[url('././assets/burj_khalifa_blue.png')]">
                        <img className='w-[40vw] lg:w-[20vw] lg:mt-36' src={LogoApp} />
                        <p className='text-white mt-6 italic text-xl'>Decentralized Asset Management</p>
                        <div className='w-[100%] mt-16 mb-28 grid grid-cols-1 justify-center items-center md:w-[80%] md:grid-cols-2 lg:w-[60%] lg:grid-cols-2'>
                            <li 
                            onClick={() => history("/fundslist")}
                            className='flex justify-center'><a className="px-20 py-3 text-xm font-bold bg-blue-color text-white hover:bg-white hover:text-secondary-color transition duration-1000 ease-in-out rounded-full uppercase" >Invest in Funds</a></li>
                            <li 
                            onClick={() => history("/manager")}
                            className='flex justify-center mt-8 md:mt-0 lg:mt-0'><a className="px-20 py-3 text-xm font-bold bg-blue-color text-white hover:bg-white hover:text-secondary-color transition duration-1000 ease-in-out rounded-full uppercase" >Be a manager</a></li>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}