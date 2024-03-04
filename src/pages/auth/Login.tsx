import { FC, useState } from "react";
import { CustomInput } from "../../components";
import { useNavigate } from "react-router-dom";

interface DataLogin {
  email?: string | null;
  password?: string | null;
}

const Login: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<DataLogin>({
    email: "",
    password: "",
  });

  const [errData, setErrData] = useState<DataLogin>({
    email: "",
    password: "",
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
    console.log(data);
  };

  /* ------------------------------ end-onsubmit ------------------------------ */

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

        <button
          onClick={onSubmit}
          className='btn btn-info text-white w-full text-lg mt-5'
        >
          Login
        </button>
        <p className='text-center mt-5'>Dont have an account yet ?</p>
        <p className='text-center mt-8 cursor-pointer'>
          <a
            onClick={() => navigate("/auth/register")}
            className='text-blue-400 border border-blue-300 rounded-lg hover:bg-blue-300 hover:text-white transition-all px-8 py-3'
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
