import rupee from '../assets/rupee.svg'
import buy from '../assets/buy.svg'
import house from '../assets/house.png'
import { motion, useScroll } from "framer-motion"
import { Divider } from '@nextui-org/react';

export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <div>

            <header className='bg-transparent fixed z-[99999] w-full h-24 flex justify-between  items-center px-10 '>
                <div className="logo">
                    <h1 className="text-3xl font-semibold">IntelliNest</h1>
                </div>
                <div className="navigation flex gap-4">
                    <div className="">
                        <button className="bg-gradient-to-bl from-violet-600 to-purple-950 rounded-xl border-[1.7px] border-violet-950 hover:border-teal-500 duration-200 font-sans font-semibold flex justify-center items-center gap-2"><img src={rupee} className='w-4 '></img> See Pricing</button>
                    </div>
                    <div className="">
                        <button className="bg-gradient-to-bl from-violet-600 to-purple-950 rounded-xl border-[1.7px] border-violet-950 hover:border-teal-500 duration-200 font-sans font-semibold flex justify-center items-center gap-2"><img src={buy} className='w-4 '></img> Buy Now</button>
                    </div>
                </div>
            </header>
            <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
            <main>
                <section className='hero '>
                    <div className='w-[90vw] mx-auto flex items-center min-h-[100vh]'>
                        <div className='w-1/2 text-6xl font-Poppins font-medium text-center grid gap-4'>
                            <h1>Tap into <i className='font-Syncopate text-5xl '>tomorrow</i></h1>
                            <h1>your <i className='font-Syncopate text-5xl '>home,</i> your <i className='font-Syncopate text-5xl '>rules</i></h1>
                            <h1>our <i className='font-Syncopate text-5xl '>tech</i>.</h1>
                            <Divider className='bg-transparent my-5' />
                            <button className='active:scale-95 duration-300 font-inter text-lg border-[1.4px] border-purple-500 bg-gradient-to-br from-purple-600 to-transparent px-10 w-fit mx-auto rounded-xl '>Start Here</button>
                        </div>
                        <div className='w-1/2 relative'>
                            <div className='bg-gradient-to-tr from-indigo-950 to-black absolute w-full h-full top-0  blur-[150px] '></div>
                            <img src={house} className='scale-90' alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
