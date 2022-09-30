import React from "react";
import {useLocation,useNavigate} from "react-router-dom";

const Header: React.FC = (props): React.ReactElement => {

    const location = useLocation();
    const navigate = useNavigate();

    const pathMathRout =(route:string):boolean =>{
        return route === location.pathname;
    }
    const onClickNavigateToHome =():void =>{
        navigate('/');
    }
    const onClickNavigateToOffer =():void =>{
        navigate('/offers');
    }
    const onClickNavigateToSighIn =():void =>{
        navigate('/sign-in');
    }
    return <div className={'bg-white border-b shadow-sm sticky top-0 z-50' }>
        <header
            className={
            'flex justify-between items-center px-3 max-w-6xl mx-auto'}>
            <div>
                <img
                    onClick={onClickNavigateToHome}
                    className={'h-5 cursor-pointer'}
                    src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt=""/>
            </div>
            <div>
                <ul className={'flex space-x-10'}>
                    <li
                        onClick={onClickNavigateToHome}
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRout('/') && 'text-black border-b-red-500'}`}>Home</li>
                    <li
                        onClick={onClickNavigateToOffer}
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRout('/offers') && 'text-black border-b-red-500'}`}>Offers</li>
                    <li
                        onClick={onClickNavigateToSighIn}
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRout('/sign-in') && 'text-black border-b-red-500'}`}>SignIn</li>
                </ul>
            </div>
        </header>
    </div>;
}

export default Header;
