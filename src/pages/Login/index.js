import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff, IoMdLock, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
const Login = () => {
  const context = useContext(MyContext);
  const [userRole, setUserRole] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    context.setShowHeaderSidebar(false);
  }, [context]);

  return (
    <>
      <div className="Login-Container">
        <div className="Login-content">
          <div className="login-logo"></div>
          <h3>Login to Dashboard</h3>
          <div className="login-box">
            
           
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
                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </span>
            </div>

      
            <div className="input-field">
              <FaShieldAlt className="icon" />
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="input"
              >
                <option value="">Select Option</option>
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
                <option value="Client">Client</option>
                <option value="Manager">Manager</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>

        
            <div className="sign-in-button">
              <Button variant="contained" className="btn-signin">
                SIGN IN
              </Button>
            </div>

            <div className="forgot-password">FORGOT PASSWORD</div>

            <div className="or-divider">
              <span>or</span>
            </div>

            <div className="social-buttons">
              <Button className="btn-google">Continue with Google</Button>
             
            </div>

            <div className="donthaveaccount">
              DONT HAVE AN ACCOUNT ?<Link to={'/Signup'}> <span> Register</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
