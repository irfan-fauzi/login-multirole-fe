import { FC } from "react";
import Logo from "/vite.svg";

const LoadingScreen: FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center justify-center">
        <img src={Logo} alt='logo' className="block animate-bounce"/>
        <p className="mt-3">please wait</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
