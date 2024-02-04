import React from "react";

export default function Component() {
    return (
        <>
            <section className="pt-24 bg-white">
                <div className="px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                            <span>Improve your running with </span> <br/> <span className="text-primary">FootBeat</span>
                        </h1>
                        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                            Sync your music with your running. Then we will analyse your run with AI and give you feedback.
                        </p>
                        
                    </div>
                    <div className="flex flex-col items-center justify-center w-full mx-auto md:flex-row md:w-10/12">
                        <a href="/signin">
                        <button className="px-6 py-3 font-bold bg-primary rounded-lg shadow-md !text-white">
                            Get started
                        </button>
                        </a>
                    </div>
                    <div className="w-full mx-auto mt-10 text-center md:w-10/12">
                        <div className="relative z-0 w-full mt-8">
                            <div className="relative overflow-hidden shadow-2xl">
                                <img src="./hero-image.png" className="rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Sign up and connect your smartwatch. Then you can track your recent workouts and use our mobile app to help you enjoy your music more.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24"><path d="M15.716,4.354a8.031,8.031,0,1,0-2.7,13.138l3.58,3.581A3.164,3.164,0,0,0,21.073,16.6l-3.58-3.58A8.046,8.046,0,0,0,15.716,4.354ZM10.034,16.069A6.033,6.033,0,1,1,14.3,14.3,6,6,0,0,1,10.034,16.069Zm9.625,1.943a1.165,1.165,0,0,1-1.647,1.647l-3.186-3.186a8.214,8.214,0,0,0,.89-.757,8.214,8.214,0,0,0,.757-.89Z"/></svg>
                        </div>
                        Find great songs
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Find great songs that match your running cadence</dd>
                    </div>
                    <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z" fill="#000000"/>
                        </svg>
                        </div>
                        Workout data
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Securely store and access all your workout data</dd>
                    </div>
                    <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg width="30px" height="30px" viewBox="0 0 20 20" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3319.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M300,3177 C298.897,3177 298,3176.103 298,3175 C298,3173.897 298.897,3173 300,3173 C301.103,3173 302,3173.897 302,3175 C302,3176.103 301.103,3177 300,3177 M296.141,3174 L291.859,3174 C291.619,3173 291.066,3172.281 290.309,3171.743 L293.093,3166.921 C293.637,3167.029 294.161,3167.026 294.704,3166.912 L297.551,3171.859 C296.868,3172.392 296.365,3173 296.141,3174 M288,3177 C286.897,3177 286,3176.103 286,3175 C286,3173.897 286.897,3173 288,3173 C289.103,3173 290,3173.897 290,3175 C290,3176.103 289.103,3177 288,3177 M293.875,3161 C294.978,3161 295.875,3161.897 295.875,3163 C295.875,3164.103 294.978,3165 293.875,3165 C292.772,3165 291.875,3164.103 291.875,3163 C291.875,3161.897 292.772,3161 293.875,3161 M299.399,3171.061 L296.49,3166.005 C297.332,3165.272 297.875,3164.204 297.875,3163 C297.875,3160.791 296.084,3159 293.875,3159 C291.666,3159 289.875,3160.791 289.875,3163 C289.875,3164.221 290.434,3165.3 291.296,3166.034 L288.405,3171.041 C285.919,3170.788 284,3172.731 284,3175 C284,3177.209 285.791,3179 288,3179 C289.862,3179 291.412,3178 291.859,3176 L296.141,3176 C296.587,3178 298.138,3179 300,3179 C302.209,3179 304,3177.209 304,3175 C304,3172.638 301.928,3170.676 299.399,3171.061"> </path> </g> </g> </g> </g>
                        </svg>
                        </div>
                        Insights
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">View insights and connections between all your exercises</dd>
                    </div>
                    <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <svg width="30px" height="30px" viewBox="0 -0.5 21 21" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -640.000000)" fill="#000000">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M61.9,483 C61.9,482.448 61.4296,482 60.85,482 L49.3,482 L49.3,490 L60.85,490 C61.4296,490 61.9,489.552 61.9,489 L61.9,483 Z M64,482 L64,490 C64,491.105 63.06025,492 61.9,492 L47.2,492 L47.2,480 L61.9,480 C63.06025,480 64,480.895 64,482 L64,482 Z M44.05,480 L45.1,480 L45.1,499 C45.1,499.552 44.6296,500 44.05,500 C43.4704,500 43,499.552 43,499 L43,481 C43,480.448 43.4704,480 44.05,480 L44.05,480 Z"></path></g></g></g>
                        </svg>
                        </div>
                        Achieve your goals
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">Set target paces and become better equipped to achieve them</dd>
                    </div>
                </dl>
                </div>
            </div>
            </div>
            </section>
            <footer className="bg-gray-100 py-3">
                <div className="container mx-auto px-4 mt-8">
                    <div className="flex-row justify-center items-center text-gray-600 text-center py-4">
                        
                        <div className="text-gray-600 mt-3">&copy; 2024 FootBeat. All rights reserved.</div>
                    </div>
                </div>
            </footer> 
        </>
    );  
}
