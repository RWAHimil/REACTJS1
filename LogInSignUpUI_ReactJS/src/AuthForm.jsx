import { useState, useEffect } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogIn] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });
a
  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogIn(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogIn(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Home</h2>
              <input type="email" placeholder="Enter Email" />
              <input type="password" placeholder="Enter Password" />
              <a href="#">Forgot Password</a>
              <button>Log In</button>
              <p>
                Not a Member ?
                <a href="#" onClick={() => setIsLogIn(false)}>
                  SignUp Now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp</h2>
              <input type="email" placeholder="Enter Email" />
              <input type="password" placeholder="Enter Password" />
              <input type="password" placeholder="Enter Confirm Password" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
