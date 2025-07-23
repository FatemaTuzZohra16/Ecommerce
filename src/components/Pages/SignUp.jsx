import React from 'react'
import signup from '../../assets/signup.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';

const SignUp = () => {
    const [name, SetName] = useState("")
    const [nameErr, SetNameErr] = useState("")

    const [email, SetEmail] = useState("")
    const [emailErr, SetEmailErr] = useState("")

    const [password, SetPassword] = useState("")
    const [passwordErr, SetPasswordErr] = useState("")

    const [show, setShow] = useState(false)

    const handleName = (e) => {
        SetName(e.target.value);
        SetNameErr("")
    }
    const handleEmail = (e) => {
        SetEmail(e.target.value);
        SetEmailErr("")
    }
    const handlePassword = (e) => {
        SetPassword(e.target.value);
        SetPasswordErr("")
    }
    const handleCreateAccound = () => {
        console.log(name);
        if (!name) {
            SetNameErr("Please Enter Your Name")
        }
        if (!email) {
            SetEmailErr("Please Enter Your Email Address")
        } else {
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                SetEmailErr("Invalid Email")
            }
        }
        if (!password) {
            SetPasswordErr("Please Inter your Password")
        } else {
            if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,12}$/.test(password)) {
                SetPasswordErr("To check a password between 8 to 12 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            }
        }
        if (name && email && password && !nameErr && !emailErr && !passwordErr) {
            toast.success("Ragistration Successfully Done")
            SetName("")
            SetEmail("");
            SetPassword("");
        }
    }


    return (
        <section className='pt-[60px] pb-[140px]'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className='flex'>
                <div>
                    <img src={signup} alt="" />
                </div>
                <div className='ml-[129px] mt-[125px]'>
                    <h2 className='font-secondery font-medium text-[36px] leading-[30px]'>Create an account</h2>
                    <p className='font-primary text-base leading-[24px] pt-6 pb-[48px]'>Enter your details below</p>
                    <div>
                        <div className='font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184]'>
                            <input
                                value={name}
                                onChange={handleName}
                                type="text"
                                placeholder='Name'
                                className='outline-0 py-2 w-[370px]' />
                        </div>
                        <p>{nameErr}</p>
                        <div className='font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
                            <input
                                value={email}
                                onChange={handleEmail}
                                type="email"
                                placeholder='Email'
                                className='outline-0 py-2 w-[370px]' />
                        </div>
                        <p>{emailErr}</p>
                        <div className='flex justify-between items-center font-primary text-base leading-[24px] text-[#7D8184] border-b border-[#7D8184] pt-10'>
                            <input
                                value={password}
                                onChange={handlePassword}
                                type={show? "text":"password"}
                                placeholder='Password'
                                className='outline-0 py-2 w-[370px]' />
                                {
                                    show? <FaEye onClick={(e)=>setShow(!show)}/>: <FaEyeSlash onClick={(e)=>setShow(!show)}/>
                                }
                        </div>
                        <p className='w-[370px]'>{passwordErr}</p>
                    </div>
                    <button onClick={handleCreateAccound} className='font-primary font-medium text-base leading-[24px] bg-primary text-white py-4 px-[122px] mt-[40px] rounded'>Create Account</button>
                    <div className='flex relative'>
                        <FcGoogle className='absolute top-[50%] left-[82px]' />
                        <button className='font-primary text-base leading-[24px] py-4 border border-[#7D8184] mt-4 w-full rounded'>Sign up with Google</button>
                    </div>
                    <div className='mt-[32px] text-center'>
                        <p className='font-primary text-base leading-[24px]'>Already have account?<Link to='/logIn' className='font-medium ml-[16px]'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp