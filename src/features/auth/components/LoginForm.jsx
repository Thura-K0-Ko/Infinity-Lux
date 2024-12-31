import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import useCookie from "react-use-cookie";
import { login } from "../../../services/auth";
import ButtonSpinner from "../../../components/ButtonSpinner";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  // const { setToken } = useTokenStore();
  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const handleLogin = async (data) => {
    const res = await login(data);

    const json = await res.json();
    // console.log(json);

    if (res.status === 200) {
      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
  };
  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          {...register("email")}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full flex gap-2 items-center justify-center text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in{isSubmitting && <ButtonSpinner />}
      </button>
     
    </form>
  );
};

export default LoginForm;
