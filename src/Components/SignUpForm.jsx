import React, { useState } from "react";
import GenericInput from "../Components/GenericInput";
import Penguine from "../assets/IMAGES/Penguine.png";
import "../Components/LoginFormStyle.css";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    email: "",
    password: "",
    FirstName: "",
    SecondName: "",
    DOB: "",
  });

  const [submittedData, setsubmittedData] = useState([]);
  const [error, seterror] = useState({
    email: "",
    password: "",
    FirstName: "",
    SecondName: "",
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
    const { email, password, FirstName, SecondName, DOB } = userdata;

    seterror({ email: "", password: "", FirstName: "", SecondName: "" });
    setSuccessMessage("");

    if (!email || !password || !FirstName || !SecondName || !DOB) {
      toast.error("Please enter data in all feilds");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{6,}/;

    if (!email) {
      seterror((prev) => ({ ...prev, email: "*Email is required" }));
      return;
    }
    if (!emailRegex.test(email)) {
      seterror((prev) => ({ ...prev, email: "*Invalid email format" }));
      return;
    }
    if (!password) {
      seterror((prev) => ({ ...prev, password: "*Password is required" }));
      return;
    }
    if (!FirstName) {
      seterror((prev) => ({ ...prev, FirstName: "*First Name is required" }));
      return;
    }
    if (!SecondName) {
      seterror((prev) => ({ ...prev, SecondName: "*Second Name is required" }));
      return;
    }
    if (!passwordRegex.test(password)) {
      seterror((prev) => ({
        ...prev,
        password: "*Password must be at least 6 characters",
      }));
      return;
    }

    if (submittedData.some((item) => item.email === email)) {
      seterror((prev) => ({
        ...prev,
        email: "*Email already in use. Try a new one!",
      }));
      return;
    }

    const obj = {
      email,
      password,
      FirstName,
      SecondName,
      DOB,
    };

    setsubmittedData([...submittedData, obj]);
    setSuccessMessage("Sign Up successful!");
    navigate("/BookTable");
    console.log(submittedData);
  };

  const dataFields = [
    {
      name: "FirstName",
      type: "text",
      placeholder: "First Name",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="flex flex-shrink-0 size-4 text-orange-700"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
      ),
    },
    {
      name: "SecondName",
      type: "text",
      placeholder: "Second Name",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="flex flex-shrink-0 size-4 text-orange-700"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
      ),
    },
    {
      name: "DOB",
      type: "date",
      placeholder: "DOB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="flex flex-shrink-0 size-4 text-orange-700"
        >
          <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
          <path
            fillRule="evenodd"
            d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="flex flex-shrink-0 size-4 text-orange-700"
        >
          <path
            fillRule="evenodd"
            d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 0 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="flex flex-shrink-0 size-4 text-orange-700"
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
    <form className="form flex flex-wrap my-16">
      <img src={Penguine} alt="Penguine" className="object-contain" />
      <p id="heading">Sign Up</p>
      {dataFields.map((fields) => (
        <GenericInput
          key={fields.name}
          icon={fields.icon}
          name={fields.name}
          type={fields.type}
          placeholder={fields.placeholder}
          value={userdata[fields.name]}
          onChange={handleData}
          error={error[fields.name]}
        />
      ))}
      <div className="btn">
        <button
          id="b1"
          className="button1"
          type="button"
          onClick={handleSubmittedData}>
          Sign Up
        </button><br>
        </br>
        <p className="text-gray-500 text-xs">Already have an account ?
          <Link to='/Login' className="text-orange-500 hover:text-green-400 underline text-sm">  Login</Link></p>

        
      </div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </form>
  );
}

export default SignUpForm;
