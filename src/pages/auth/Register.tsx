import { FC, useEffect, useState } from "react";
import { CustomInput } from "../../components";

interface DataRegister {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

const Register: FC = () => {
  const [data, setData] = useState<DataRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errData, setErrData] = useState<DataRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

   /* -------------------------------- On Change ------------------------------- */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
   
  };
  /* ------------------------------ end on change ----------------------------- */

  
  /* -------------------------------- on submit ------------------------------- */

  const onSubmit = () => {
    console.log(data)
  }

/* ------------------------------ end-onsubmit ------------------------------ */

  return (
    <div className='w-full'>
      <h1 className='text-2xl text-center mt-20'>Sign Up</h1>
      <div className='max-w-sm mx-auto px-2'>
        <div className='mb-3'>
          <CustomInput
            name='name'
            label='name'
            type='text'
            placeholder='input your name here...'
            required={true}
            onChange={onChange}
            value={data.name ?? ""}
            error={errData.name}
          />
        </div>
        <div className='mb-3'>
          <CustomInput
            name='email'
            label='email'
            type='email'
            placeholder='input your email here...'
            required={true}
            onChange={onChange}
            value={data.email ?? ""}
            error={errData.email}
          />
        </div>
        <div className='mb-3'>
          <CustomInput
            name='password'
            label='password'
            type='password'
            placeholder='input your password here...'
            required={true}
            onChange={onChange}
            value={data.password ?? ""}
            error={errData.password}
          />
        </div>
        <div className='mb-3'>
        <CustomInput
            name='confirmPassword'
            label='confirm password'
            type='password'
            placeholder='input your password here...'
            required={true}
            onChange={onChange}
            value={data.confirmPassword ?? ""}
            error={errData.password}
          />
        </div>
        <button onClick={onSubmit} className='btn btn-info text-white w-full text-lg mt-5'>
          Register
        </button>
        <p className='text-center mt-5'>Already have an account ?</p>
        <p className='text-center mt-8'>
          <a
            href='/auth/login'
            className='text-blue-400 border border-blue-300 rounded-lg hover:bg-blue-300 hover:text-white transition-all px-8 py-3'
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
