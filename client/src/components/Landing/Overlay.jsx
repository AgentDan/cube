import React from 'react';
import {Scroll} from "@react-three/drei";
import "./Overlay.css"

const Overlay = () => {

    return (
        <>
            <Scroll html>
                <div>
                    <div className=" h-screen">
                        <div className=" text-center mt-10 text-[10vw] text-white font-extrabold ">
                            Zdravo momci
                            <div className="but h-auto flex mt-2 gap-2 p-2 flex-wrap justify-center items-center">
                                <div className="text-[15px]">Example: login - cube, pass - 1000 </div>

                                <div
                                    className="p-4 w-auto h-[100px] hover:cursor-pointer hover:border-2 hover:border-gray-400 bg-gray-200 content-center text-center text-[40px] rounded-2xl">
                                    <a href="/login" className="content-center w-auto h-[100px]">
                                        3dConstructor
                                    </a>
                                </div>
                                <div
                                    className="p-4 w-auto h-[100px] hover:cursor-pointer hover:border-2 hover:border-gray-400 bg-gray-200 content-center text-center text-[40px] rounded-2xl">
                                    ========
                                </div>
                                <div
                                    className="p-4 w-auto h-[100px] hover:cursor-pointer hover:border-2 hover:border-gray-400 bg-gray-200 content-center text-center text-[40px] rounded-2xl">
                                    ========
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            2</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            3</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            4</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            5</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            6</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            7</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            8</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            9</h2>
                    </div>
                    <div className="h-screen">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            10</h2>
                    </div>
                </div>
            </Scroll>
        </>
    );
};

export default Overlay;