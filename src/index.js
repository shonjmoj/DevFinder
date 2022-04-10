import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BsGithub} from 'react-icons/bs'
import Footer from './Footer';


ReactDOM.render(
    <React.StrictMode>
        <div className='selection:bg-slate-900 h-screen text-gray-50 overflow-auto bg-slate-900 Consola flex flex-col items-center justify-start'>
            <div className='text-6xl m-10 font-semibold flex items-center group select-none'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r 
                        from-gray-400 via-gray-200 to-gray-100 group-hover:opacity-10 transition-all duration-500
                        '>DevFinder<span className='text-5xl'>.</span></h1>
                <BsGithub size={45} className="mx-1 group-hover:rotate-12 transition-all duration-500"/>
            </div>
            <App/>
            <Footer icon={BsGithub}/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
)