import { FC } from "react";
import { CustomInput, Gap } from "../../components";

const Register: FC = () => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl text-center mt-20'>Sign Up</h1>
      <Gap height={5} />
      <div className='max-w-sm mx-auto'>
        <CustomInput
          name='name'
          label='name'
          type='text'
          placeholder='input your name here...'
          required={true}
        />
        <Gap height={5} />
        <CustomInput
          name='email'
          label='email'
          type='email'
          placeholder='input your email here...'
          required={true}
        />
        <Gap height={5} />
        <CustomInput
          name='password'
          label='password'
          type='password'
          placeholder='input your password here...'
          required={true}
        />
        <Gap height={5} />
        <CustomInput
          name='confirm-password'
          label='confirm password'
          type='password'
          placeholder='input your password here...'
          required={true}
        />
        <Gap height={10} />
        <button className='btn btn-info text-white w-full text-lg'>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
