import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '../../assets/congrats_animation.json';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function SuccessInvestment() {

    const history = useNavigate();
      
    return (
        <>
            <div className='w-[100vw] h-screen text-gray-700 bg-[#f6f6f6] overflow-y-auto'>
                <section className="mb-6">
                    <div className="container mx-auto px-6 text-center py-8">
                        <div className='flex flex-col justify-center items-center my-10 mx-6 mb-12 shadow-lg bg-white text-secondary-color rounded-[20px]'>
                            <h2 className="flex justify-center items-center h-[12vh] mx-6 text-4xl font-bold text-center text-secondary-color">
                            Congratulations
                            </h2>
                            <div className='w-[50%] h-auto md:w-[20%] lg:w-[12%]'>
                                <Player
                                    src={Animation}
                                    className="player"
                                    loop
                                    autoplay
                                />
                            </div>
                            <h2 className="flex justify-center items-center h-[12vh] mx-6 text-4xl text-center text-secondary-color">
                                You just created a fund with whale.finance
                            </h2>
                            <button
                            className="my-6 w-[90%] md:w-[55%] lg:w-[35%] bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={() => history('/manager')}
                            >
                            Manage my fund now
                            </button>
                            <button
                            className="mb-6 w-[90%] md:w-[55%] lg:w-[35%] bg-gradient-to-r from-blue-color to-secondary-color text-white font-bold rounded-full border-2 border-transparent py-2 px-20 shadow-lg uppercase tracking-wider hover:from-white hover:to-white hover:text-secondary-color hover:border-secondary-color transition duration-1000 ease-in-out" onClick={() => history('/manager')}
                            >
                            Back
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}