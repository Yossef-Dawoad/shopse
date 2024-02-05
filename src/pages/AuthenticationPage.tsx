import "./styles/AuthenticationPage.css";

const AuthenticationPage = () => {
  return (
    <div className="Authentication-Container">
      <div className="auth-from">
        <h1>SignUp</h1>
        <form action="POST">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <div className="switch-to-other-auth">
            <p>
              Already Have An Account?{" "}
              <span className="login-span">Login here</span>
            </p>
          </div>
          <div className="acc-agreement">
            <input
              className="acc-agreement-check"
              type="checkbox"
              name=""
              id=""
            />
            <p>
              By Continue, i agree to the terms of use and Privacy policy of
              this services
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
