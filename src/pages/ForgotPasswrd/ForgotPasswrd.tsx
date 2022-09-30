import React, {useState} from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth";


const ForgotPassword: React.FC = (props): React.ReactElement => {
    const [email,setEmail] = useState('');

    const onChange =(e:any)=>{
       setEmail(e.target.value);
    }
    return <section>
        <h1 className={'text-3xl text-center mt-6 font-bold'}>Forgot password</h1>
        <div className={'flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'}>
            <div className={'md:w-[67%] lg:w-[50%] mb-12 md:mb-6'}>
                <img src={'https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'}
                     alt={''}
                     className={'w-full rounded-2xl'}
                />
            </div>
            <div className={'w-full md:w-[67%] lg:w-[40%] lg:ml-20'}>
                <form >

                    <input
                        className={'mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'}
                        value={email}
                        onChange={onChange}
                        placeholder={'Email address'}
                        type={'email'}
                        id={'email'}/>

                    <div className={'justify-between flex whitespace-nowrap text-sm sm:text-lg'}>
                        <p>Don't have a account?<Link className={'ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out'} to={'/sign-up'}>Register</Link></p>
                        <p>
                            <Link className={'text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1'} to ='/sign-in'>Sign in instead?</Link>
                        </p>
                    </div>
                    <button className={'w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'} type={'submit'}>Send reset password</button>
                    <div className={'flex items-center my-4 before:border-t flex before:flex-1  before:border-grey-300 after:border-t after:flex-1 after:border-gray-300'}>
                        <p className={'text-center font-semibold mx-4'}> OR</p>
                    </div>
                    <OAuth/>
                </form>


            </div>
        </div>
    </section>;
}

export default ForgotPassword;
