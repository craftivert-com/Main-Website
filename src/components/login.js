import { SignIn } from "@clerk/nextjs";
import Header from "./header";

export default function Login(){
    return (
        <>
            <div className="flex   bg-dot-black/[0.4] relative relative flex-col">


                <div className=" t-0 l-0  w-full relative bg-gradient-to-b from-[#7155ff2f] to-transparent ">
                    <Header/>
                    <section className="px-4 sm:px-6 lg:px-8  flex flex-col p-4 items-center justify-center ">
                    <h2
                        className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                        Sign In<span className="text-[#7155ff]"> Today.</span>
                    </h2>
                    <br/>
                    <br/>
                    <div className=" mx-auto text-center">
                            
                        <SignIn />
                        <br/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}