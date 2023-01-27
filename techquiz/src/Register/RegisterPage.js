import React, { useState } from "react";
import axios from "axios";
import logoL from "./img/TechquizBlack.png";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nome: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:1400/api/utilizadores/register",inputs
      );
      console.log("Register Sucessefull!!");
      console.log(inputs.password);
      console.log(res);
    } catch (err) {}
  };

  // Function for Alert and your configs
  const notify = () => {
    toast.success("Your register is Complete", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="Register-content">
      <div className="flex-container">
        {/* banner image */}
        <div className="BannerR"></div>
      </div>
      <div className="RegisterBox">
        <div className="TextLogo">
          <img className="logoRg" src={logoL} alt="logo3" />
          <h2>Create an Account</h2>
        </div>

        <form>
          <p>
            <input
              className="textboxNome"
              name="nome"
              type="text"
              placeholder="Nome"
              required
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              className="textboxEmail"
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              className="textboxPassword"
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </p>

          <button
            className="Create-an-account"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
              notify(e);
          }}
          >
            Register
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {/*<button 
      className='Create-an-account' 
      type="submit" 
      onClick={ handleSubmit } 
      >Register</button>*/}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
