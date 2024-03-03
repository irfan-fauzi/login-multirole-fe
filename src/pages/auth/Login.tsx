import { FC } from "react";
import { CustomInput } from "../../components";

const Login: FC = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl text-center mt-20'>Login</h1>
      <div className='max-w-sm mx-auto px-2'>
        <div className='mb-3'>
          <CustomInput
            name='email'
            label='email'
            type='email'
            placeholder='input your email here...'
            required={true}
          />
        </div>
        <div className='mb-3'>
          <CustomInput
            name='password'
            label='password'
            type='password'
            placeholder='input your password here...'
            required={true}
          />
        </div>
       
        <button className='btn btn-info text-white w-full text-lg mt-5'>
          Login
        </button>
        <p className='text-center mt-5'>Dont have an account yet ?</p>
        <p className='text-center mt-8'>
          <a
            href='/auth/register'
            className='text-blue-400 border border-blue-300 rounded-lg hover:bg-blue-300 hover:text-white transition-all px-8 py-3'
          >
            Register
          </a>
        </p>
      </div>
    </div>
  )
};

export default Login;
