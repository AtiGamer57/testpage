import React from "react";
import greetingImage from './assets/images/greeting.jpg'

function Greeting() {
    return (
        <div className='flex justify-center items-center text-center rounded-3xl relative max-h-[36rem] overflow-hidden'>
            <img className='object-contain rounded-3xl w-full ' src={greetingImage} alt='greeting image' />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid">
                    <div className=" text-gray-900 font-normal text-nm mb-3 mx-auto bg-slate-200 rounded-md whitespace-pre">  Futó Attila:  </div>
                    <div className=" text-gray-900 font-normal text-3xl mb-3 mx-auto bg-slate-200 rounded-md whitespace-pre">  Shenanigans and doohickeys  </div>
            </div>
        </div>
    );
}

export default Greeting;