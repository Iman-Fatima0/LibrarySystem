import React, { useState } from "react";
import GenericInput from "../Components/GenericInput";
import Penguine from "../assets/IMAGES/Penguine.png";
import { useNavigate } from "react-router-dom";
import "../Components/LoginFormStyle.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function LoginForm() {
  const Navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
  });

  const [submittedData, setsubmittedData] = useState([]);

  const [error, seterror] = useState({
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleData = (e) => {
    const { name, value } = e.target;
    setuserdata({
      ...userdata,
      [name]: value,
    });
  };

  const handleSubmittedData = () => {
    const { email, password } = userdata;

    seterror({ email: "", password: "" });
    setSuccessMessage("");
    if (!email || !password) {
      toast.error("Please enter data in both feilds");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{6,}/;

    if (!emailRegex.test(email)) {
      seterror((prev) => ({ ...prev, email: "*Invalid email format." }));
      return;
    }

    if (!passwordRegex.test(password)) {
      seterror((prev) => ({
        ...prev,
        password: "*Password must be at least 6 characters.",
      }));
      return;
    }

    // if (submittedData.some(item => item.email === email)) {
    //   seterror(prev => ({ ...prev, email: '*Email already in use. Try a new one!' }));
    //   return;
    // }

    const obj = {
      email,
      password,
    };

    setsubmittedData([...submittedData, obj]);
    setSuccessMessage("Login successful!");
    Navigate("/BookTable");
    console.log(submittedData);
  };

  const dataFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      error: error.email,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      error: error.password,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <form className="form mt-36 flex flex-wrap align-middle  ">
      {" "}
      <img src={Penguine} alt="Penguine" className="object-contain " />
      <p id="heading">Login</p>
      {dataFields.map((fields) => (
        <GenericInput
          key={fields.name}
          icon={fields.icon}
          name={fields.name}
          type={fields.type}
          placeholder={fields.placeholder}
          value={userdata[fields.name]}
          onChange={handleData}
          error={fields.error}
        />
      ))}
      <div className="btn">
        <button className="button1" type="button" onClick={handleSubmittedData}>
          Login
        </button>
        <br></br>
        <p className="text-gray-500 text-xs">
          Don't have an Account?{" "}
          <Link
            to="/SignUp"
            className="text-orange-500 hover:text-green-400 underline text-sm"
          >
            SignUp
          </Link>
        </p>
      </div>
      {successMessage && (
        <p className="text-green-500 transition delay-150">{successMessage}</p>
      )}
    </form>
  );
}

export default LoginForm;
