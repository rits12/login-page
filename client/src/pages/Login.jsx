import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import D1 from "../img/Line_platinum.svg";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <div className="center">
        <img
          src={D1}
          alt="D1.AI"
          style={{ width: "150px", height: "auto", paddingBottom: "20px" }}
        />

        <div className="loginButton google" onClick={google}>
          <img src={Google} alt="" className="icon" />
          Google Login
        </div>

        <div className="loginButton facebook" onClick={facebook}>
          <img src={Facebook} alt="" className="icon" />
          Facebook Login
        </div>
      </div>
    </div>
  );
};

export default Login;
