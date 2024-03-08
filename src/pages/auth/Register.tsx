import { FC, useState } from "react";
import { CustomInput } from "../../components";
import { useNavigate } from "react-router-dom";
import InputValidation from "../../helper/InputValidation";

interface DataRegister {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
}

const Register: FC = () => {
  const navigate = useNavigate();
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
    const { value, name } = e.target;
    let strErr = "";
    if (name === "email") {
      strErr = InputValidation.EmailValidation(value, 100, "Email", true);
    }
    if (name === "name") {
      strErr = InputValidation.Textvalidation(value, 100, "Name", true);
    }
    if (name === "password") {
      strErr = InputValidation.PasswordValidation(value,4,12,"Password",true);
    }

    if (name === "confirmPassword"){
     strErr = value === data.password ? "" : "harus sama" 
    }

    setErrData({
      ...errData,
      [name]: strErr,
    });
    setData({
      ...data,
      [name]: value,
    });

    e.preventDefault();
  };
  /* ------------------------------ end on change ----------------------------- */

  // -------- on validation
  const onValidation = () => {
    const tempValidation:DataRegister = {
      name: InputValidation.Textvalidation(data.name, 100, "Name", true),
      email: InputValidation.EmailValidation(data.email, 100, "Email", true),
      password: InputValidation.PasswordValidation(data.password, 4, 12, "Password", true),
      confirmPassword: data.confirmPassword === data.password ? "" : "harus sama" 
    }
    setErrData(tempValidation)
    // eslint-disable-next-line prefer-const
    for (let key in tempValidation) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((tempValidation as any)[key] !== "") {
        return false;
      }
    }
    return true;
  }
  // ---------------------------


  /* -------------------------------- on submit ------------------------------- */

  const onSubmit = () => {
    const valid = onValidation()
    if(valid) {
      console.log(data)
    }
  };

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
            error={errData.confirmPassword}
          />
        </div>
        <button
          onClick={onSubmit}
          className='btn btn-info text-white w-full text-lg mt-5'
        >
          Register
        </button>
        <p className='text-center mt-5'>Already have an account ?</p>
        <p className='text-center mt-8 cursor-pointer'>
          <a
            onClick={() => navigate("/auth/login")}
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
