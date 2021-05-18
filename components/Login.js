import { signIn } from "next-auth/client";
import Image from "next/image";
const Login = () => {
  return (
    <div className="grid place-items-center mt-16">
      <Image
        src="/facebooklogo.png"
        height={300}
        width={300}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center mt-16 cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
