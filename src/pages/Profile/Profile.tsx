import React, {useState} from "react";
import {getAuth, updateProfile} from 'firebase/auth';
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {doc} from "firebase/firestore";
import {db} from "../../firebase";
import {FcHome} from "react-icons/fc";

const Profile: React.FC = (props): React.ReactElement => {
    const auth=getAuth();
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail] = useState(false);
    const [formData,setFormData] = useState({
        name:'Sahand',
        email: 'sahand.gha@gamil.com',
    });

    const {name, email} = formData;

    function onLogOut(){
        auth.signOut();
        navigate('/');
    }
    async function onSubmit() {
        try {
            if(auth.currentUser?.displayName !== name) {
                await updateProfile(auth.currentUser, {displayName:name});
                //update name in the firestore

            }
        }catch(error) {
            toast.error('');
        }
    }
    function onClickEdit(){
        changeDetail && onSubmit();
        setChangeDetail(prevState => !prevState)

    }

    function onChange(e:any) {
        setFormData((prevState)=>({
            ...prevState, [e.target.id]:e.target.value
        }))
    }
    return <>
        <section className={'max-w-6xl mx-auto flex justify-center items-center flex-col'}>
            <h1 className={'text-3xl text-center mt-6 font-bold'}>My profile</h1>
            <div className={'w-full md:w-[50%] mt-6 px-3'}>
                <form>
                    <input
                        className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && 'bg-red-200 focus:bf-red-200'}`}
                        type={'text '}
                        id={'name'}
                        value={name}
                        onChange={onChange}
                        disabled={!changeDetail} />
                    <input
                        className={'mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'}
                        type={'email '}
                        id={'email'}
                        onChange={onChange}
                        value={email}
                        disabled={!changeDetail} />
                    <div className={'mb-6flex- justify-between whitespace-nowrap text-sm sm:text-lg'}>
                        <p className={'flex items-center  '}>
                            Do you want to change your name?
                            <span onClick={onClickEdit} className={'text-red-600 hover:text-red-700 duration-200 ml-1 cursor-pointer ease-in-out'}>
                                {changeDetail ? 'Apply change' : 'edit'}
                            </span>
                        </p>
                        <p onClick={onLogOut} className={'text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer '}>Sign out</p>
                    </div>
                    <button type="submit" className={'w-full bg-blue-600 px-7 py-3 font-medium uppercase text-white'}>
                        <Link to={'/create-listing'}>
                            <FcHome/>
                            Sell or rent your home
                        </Link>
                    </button>
                </form>
            </div>
        </section>
    </>;
}

export default Profile;
