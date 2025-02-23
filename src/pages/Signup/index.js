import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import {
  IoMdContact,
  IoMdEye,
  IoMdEyeOff,
  IoMdHome,
  IoMdLock,
  IoMdMail,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Signup = () => {
  const context = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate toggle for confirm password
  const [isChecked, setIsChecked] = useState(false);

  

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <section className="signup-page">
        <div className="matter-container">
          <div className="matter-content">
            <h1>BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL</h1>
          </div>
          <div className="gotohome">
            <Link
              to={"/"}
              onClick={() => {
                context.setShowHeaderSidebar(true); // Show the header and sidebar again
                window.scrollTo(0, 0);
              }}
            >
              <Button>
                <IoMdHome className="home-icon" />
                GO TO HOME
              </Button>
            </Link>
          </div>
        </div>
        <div className="Signup-Container">
          <div className="Signup-content">
            <div className="Signup-logo"></div>
            <h3>Register to Dashboard</h3>
            <div className="Signup-box">
              <div className="input-field">
                <IoMdContact className="icon" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input"
                />
              </div>

              <div className="input-field">
                <IoMdMail className="icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>

              <div className="input-field">
                <IoMdLock className="icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {showPassword ? (
                    <IoMdEyeOff size={20} />
                  ) : (
                    <IoMdEye size={20} />
                  )}
                </span>
              </div>

              <div className="input-field">
                <FaShieldAlt className="icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="input"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {showConfirmPassword ? (
                    <IoMdEyeOff size={20} />
                  ) : (
                    <IoMdEye size={20} />
                  )}
                </span>
              </div>

              <div className="checkbox-field">
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  I agree to the terms and conditions
                </label>
              </div>

              <div className="sign-in-button">
                <Button variant="contained" className="btn-signin">
                  SIGN UP
                </Button>
              </div>

              <div className="or-divider">
                <span>or</span>
              </div>

              <div className="social-buttons">
                <Button className="btn-google">Continue with Google</Button>
              </div>

              <div className="donthaveaccount">
           
                Already have an account?   <Link to={"/Login"}  style={{ textDecoration: "none" }}><span>Login</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
