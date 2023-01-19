import Link from "next/link";
import React, { useContext, useState, useRef } from "react";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Nav from "../components/Nav";

const Account = () => {
  const [issLogin, setIssLogin] = useState(true);
  const [error, seterror] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (issLogin) {
      setSuccess("");
      seterror("Wrong Credentials");
    } else {
      console.log(formData, "formData");
      setSuccess(
        "Registration successful and under review. We will get back to you when approved"
      );
      setIssLogin(true);
      setformData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  const handleChange = (e) => {
    seterror("");
    setSuccess("");
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Meta />
      <Nav />
      <div className="w-[90%] md:w-[50%] my-10 mt-32 mx-auto max-w-[1200px] text-center">
        <h1 className="text-[25px]">{issLogin ? "Login" : "Create Account"}</h1>
        <p style={{ color: "red" }}>
          <small>{error}</small>
        </p>
        {success && (
          <p style={{ color: "green", lineHeight: "15px" }}>
            <small>{success}</small>
          </p>
        )}
        <form onSubmit={handleSubmit}>
          {!issLogin && (
            <>
              <div className="input_wrap">
                <label htmlFor="email">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required="true"
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input_wrap">
                <label htmlFor="password">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required="true"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </>
          )}
          <div className="input_wrap">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              required="true"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input_wrap">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              required="true"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="my-8 py-2 px-12 bg-[#006caa] text-white"
          >
            {issLogin ? "Log in" : "Sign Up"}
          </button>
          <p>
            <small
              onClick={() => {
                setIssLogin(!issLogin);
                seterror("");
                setSuccess("");
              }}
              style={{ cursor: "pointer" }}
            >
              {issLogin
                ? "Dont have an account ? Create account"
                : "Already have an account ? Log in."}
            </small>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
