import { FC, useState } from "react";
import Swal from "sweetalert2";
import { CustomInput } from "../../components";
import { useNavigate } from "react-router-dom";
import InputValidation from "../../helper/InputValidation";
import Http from "../../helper/Fetch";
import LoadingScreen from "../../components/layouts/LoadingScreen";
import AuthUser from "../../helper/AuthUser";
import AuthAttributes from "../../interface/AuthUserInterface";

interface DataLogin {
  email?: string | null;
  password?: string | null;
}

const Login: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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

    let strErr = "";
    if (name === "email") {
      strErr = InputValidation.EmailValidation(value, 100, "Email", true);
    }
    if (name === "password") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      strErr = InputValidation.PasswordValidation(
        value,
        8,
        12,
        "Password",
        true
      );
    }
    setData({
      ...data,
      [name]: value,
    });
    setErrData({
      ...errData,
      [name]: strErr,
    });
  };
  /* ------------------------------ end on change ----------------------------- */

  /* -------------------------------- on submit ------------------------------- */
  const onSubmit = () => {
    const valid = onValidation();
    if (valid) {
      Login();
    }
  };

  const Login = async () => {
    setLoading(true);
    try {
      const res = await Http.post("/user/login", data, {
        withCredentials: true,
      });
      const resData: AuthAttributes = {
        id: res.data?.data?.id,
        email: res.data?.data?.email,
        name: res.data?.data?.name,
        roleId: res.data?.data?.roleId,
        token: res.data?.data?.token,
        menuAccess: res.data?.data?.menuAccess,
      };
      
      setData({
        ...data,
        email: "",
        password: "",
      });

      AuthUser.SetAuth(resData)
      setLoading(false);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: "Unautorized",
        title: "Oopss",
      });
      setLoading(false);
    }
  };
  /* ------------------------------ end-onsubmit ------------------------------ */

  // on Validation
  const onValidation = (): boolean => {
    const tempValidation: DataLogin = {
      email: InputValidation.EmailValidation(data.email, 100, "Email", true),
      password: InputValidation.PasswordValidation(
        data.password,
        8,
        12,
        "Password",
        true
      ),
    };
    setErrData(tempValidation);

    // eslint-disable-next-line prefer-const
    for (let key in tempValidation) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((tempValidation as any)[key] !== "") {
        return false;
      }
    }
    return true;
  };

  return loading ? (
    <LoadingScreen />
  ) : (
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
