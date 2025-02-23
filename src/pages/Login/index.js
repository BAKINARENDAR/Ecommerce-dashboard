import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff, IoMdLock, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Login = () => {
  const context = useContext(MyContext);
  const [userRole, setUserRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    context.setShowHeaderSidebar(false); // Hide header/sidebar on login
  
    return () => {
      context.setShowHeaderSidebar(true); // ✅ Restore header/sidebar on back navigation
    };
  }, [context]);

  return (
    <div className="Login-Container">
      <div className="Login-content">
        <div className="login-logo"></div>
        <h3>Login to Dashboard</h3>
        <div className="login-box">
          
          {/* Email Input with autoFocus */}
          <div className="input-field">
            <IoMdMail className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
              autoFocus // ✅ Correct placement (only one field should have autofocus)
            />
          </div>

          {/* Password Input */}
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

          {/* Role Selection */}
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

          {/* Sign-In Button */}
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
            DONT HAVE AN ACCOUNT? 
            <Link to={'/Signup'} style={{ textDecoration: "none" }}>
              <span> Register</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
