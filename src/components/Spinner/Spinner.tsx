import React from "react";
const Spinner: React.FC = (props): React.ReactElement => {
    return <div className={'bg-black bg-opacity-50 flex items-center justify-center  fixed left-0 right-0 top-0 z-50'}>
        <div>
            <img src={'./src/svg/spinner.svg'} alt={'Loading...'}
                 className={'h-24'}/>
         </div>
    </div>;
}

export default Spinner;
