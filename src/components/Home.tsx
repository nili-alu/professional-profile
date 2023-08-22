import React from "react";
import AboutMe from "./AboutMe";

function Home() {
    return (
        <>
            <div className="bg-background text-white">

                <div id="container" className=" ml-20 mr-20 rounded-md border border-radius-md justify-center">
                    <ul className="  grid grid-cols-8  rounded-md border border-radius-md  text-center">
                        <li className="rounded-md border border-radius-sm mr-3 h-10">Logo</li>
                        <li className="rounded-md border border-radius-sm mr-3 h-10">About-me</li>
                        <li className="rounded-md border border-radius-sm mr-3 h-10">Project</li>
                        <li className="rounded-md border border-radius-sm mr-3 h-10">contact-me</li>

                    </ul >
                    <div className="grid grid-cols-2">
                        <div className="m-10">
                            <h1 className="text-md font-semibold">Hi, I'm <br /><span className="text-yellow-500 text-4xl">Lievin Niyoyandika</span></h1>
                            <h1 className="text-md font-semibold">I'm a <br /><span className="text-yellow-300"> ---&gt; Web Developer</span></h1>
                            <p className="text-md font-semibold"> based in Rwanda, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                            <button className="bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-10">My resume</button>


                        </div>
                        <div className="ml-20">
                            <img src="https://images.unsplash.com/photo-1612835362596-4b7b7b0b2b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="image" className="h-96 w-96 rounded-full" />

                        </div>
                    </div>
                    <AboutMe />
                </div >

            </div >
        </>
    );
}
export default Home;
