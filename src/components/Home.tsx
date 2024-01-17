import rupee from '../assets/rupee.svg'
import buy from '../assets/buy.svg'
import { motion, useScroll } from "framer-motion"
export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <div>

            <header className='bg-black h-24 flex justify-between  items-center px-10 '>
                <div className="logo">
                    <h1 className="text-3xl font-semibold">IntelliNest</h1>
                </div>
                <div className="navigation flex gap-4">
                    <div className="">
                        <button className="bg-zinc-800 rounded-md border-[1.7px] border-zinc-800 hover:border-teal-500 duration-200 font-sans font-semibold flex justify-center items-center gap-2"><img src={rupee} className='w-4 '></img> See Pricing</button>
                    </div>
                    <div className="">
                        <button className="bg-zinc-800 rounded-md border-[1.7px] border-zinc-800 hover:border-teal-500 duration-200 font-sans font-semibold flex justify-center items-center gap-2"><img src={buy} className='w-4 '></img> Buy Now</button>
                    </div>
                </div>
            </header>
            <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />

            <main>
                <section className='hero'>
                    <div className='w-[90vw] mx-auto flex items-center min-h-[100vh]'>
                        <div className='w-1/2 text-6xl font-Poppins font-medium text-center grid gap-4'>
                            <h1>Tap into <i className='font-Syncopate text-5xl '>tomorrow</i></h1>
                            <h1>your <i className='font-Syncopate text-5xl '>home,</i> your <i className='font-Syncopate text-5xl '>rules</i></h1>
                            <h1>our <i className='font-Syncopate text-5xl '>tech</i>.</h1>
                        </div>
                        <div className='w-1/2'></div>
                    </div>
                </section>
            </main>
        </div>
    )
}
