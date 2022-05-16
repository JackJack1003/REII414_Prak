import React from "react";
import { useState } from "react";

function Login() {
  const [usernameReg, setUserReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  return (
    <div className="login">
      <div className="login_Sign_In">
        <h1> Welcome back!</h1>
        <label> Username</label>
        <input
          type="text"
          placeholder="Username?"
          onChange={(e) => setUserReg(e.target.value)}
        />
        <label> Password</label>
        <input
          type="text"
          placeholder="Password?"
          onChange={(e) => setPasswordReg(e.target.value)}
        />
        <button> Submit</button>
      </div>

      <div className="login_Sign_Up">
        <h1> ...Or sign up</h1>
        <label> Username</label>
        <input type="text" />
        <label> Password</label>
        <input type="text" />
        <button> Submit</button>
      </div>
    </div>
  );
}

export default Login;
