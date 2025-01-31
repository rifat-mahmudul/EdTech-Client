
import { Link } from 'react-router'
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
// import { ImSpinner9 } from 'react-icons/im';
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Logo from '../share/Logo';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="flex items-center justify-center min-h-screen">

            <div className='border border-gray-500 shadow-xl rounded-lg w-[90%] sm:w-[500px] p-8 bg-gradient-to-t from-[#0C1725] to-[#0E272B]'>

                <div className='flex items-center justify-center'>
                    <Logo></Logo>
                </div>
                
                <div>
                    <h1 className='font-bold text-blue-500 text-4xl text-center mb-6'>Login</h1>
                </div>

                <div>

                    <form>

                        <div className='mt-4'>
                            <label 
                            className='text-white font-semibold' 
                            htmlFor="email">
                                Email 
                                <span className='text-red-500 text-2xl font-bold'>*</span>
                            </label>
                            <br></br>

                            <input 
                            type='email'
                            className='w-full bg-inherit border-b-2  border-gray-700 focus:border-blue-500 focus:outline-0' 
                            />
                            <p className='text-gray-400 text-xs mt-1'>Enter Your Email.</p>
                        </div>

                        <div className='mt-4'>
                            <label 
                            className='text-white font-semibold' 
                            htmlFor="password">
                                Password 
                                <span className='text-red-500 text-2xl font-bold'>*</span>
                            </label>
                            <br></br>

                            <input 
                            className='w-full bg-inherit border-b-2  border-gray-700 focus:border-blue-500 focus:outline-0'
                            type={showPassword ? 'text' : 'password'}
                            />

                            <button 
                            type="button"
                            className='absolute -ml-4 mt-2  transform -translate-y-1/2 text-gray-400 hover:text-white'
                            onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                        
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-400 text-xs mt-1'>Enter Your Password.</p>

                            <Link to={'/forgot-password'}>
                            <p className='text-yellow-500 text-xs mt-1'>Forgot password</p>
                            </Link>
                        </div>

                        <button 
                        className='bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-400 hover:to-blue-700 py-3 w-full mt-5 rounded-lg font-bold border border-gray-500 transition-[0.5s] disabled:cursor-not-allowed disabled:bg-blue-300'>
                            {/* {loading ? <ImSpinner9 className='animate-spin mx-auto text-2xl text-white' /> : 'Login'} */}
                            Login
                        </button>

                    </form>

                    <p className='text-sm mt-4 mb-4 sm:flex justify-center space-x-2 text-gray-300'>
                        <span>Do not have an account?</span>
                        <span className='text-green-500'>
                        <Link className='flex items-center space-x-1' to='/register'>
                            <span>Register here!</span> <LuSquareArrowOutUpRight />
                        </Link>
                        </span>
                    </p>

                    <div className='flex items-center justify-center space-x-4 mt-4'>
                        <div className='border border-gray-300 w-full'></div>
                        <div>
                            <h1>Or</h1>
                        </div>
                        <div className='border border-gray-300 w-full'></div>
                    </div>

                    <button 
                    className='bg-black py-3 w-full mt-5 rounded-lg font-bold flex items-center justify-center space-x-2 disabled:cursor-pointer'
                    >
                        <FcGoogle className='text-3xl' /> <span>Continue With Google</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default LoginForm
