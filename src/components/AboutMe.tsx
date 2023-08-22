import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faStar } from "@fortawesome/free-solid-svg-icons";


function AboutMe() {
    return (
        <>
            <div className="flex flex-col gap-4 items-center text-sm" >
                <h1 className="text-md font-semibold text-yellow-800 underline">From Code to Coffee: About Me</h1>
                <div className="w-1/2 p-10 rounded-sm border border-gray border-radius-4 rounded-md">
                    <p className="">
                        4 years of experience have shaped me into a frontend wizard, but I'm more than that - I'm a versatile engineer experienced in backend, DevOps, and cloud computing.
                        <br /><br />If you seek transformative solutions, consulting, or mentorship, let's connect!
                    </p> <br />
                    <p className="">I build awesome products using:
                        <ul className="ml-10 mt-5 grid grid-cols-2 gap-4 text-yellow-500">
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />React.js</li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />Node.js</li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />Express.js</li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />PostgreSQL</li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />MongoDB</li>
                            <li><FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />Django</li>
                        </ul>
                    </p>
                    <br />

                    <ul className="flex flex-row gap-4 text-yellow-500 ">
                        <p className="text-white" >I also have experience with:</p>
                        <li> <span className="text-white mr-2">•</span>Git</li>
                        <li> <span className="text-white mr-2">•</span>Redux Toolkit</li>
                        <li><span className="text-white mr-2">•</span>Python</li>
                    </ul>

                </div>
            </div >
        </>
    );
}
export default AboutMe;


