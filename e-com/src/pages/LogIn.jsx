import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop_context";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [currentState, setCurrentState] = useState("LogIn");
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "SignUp") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.status === 200) {
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          toast.error(response.data.message);
        }
      } else {
        const res = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (res.status === 200) {
          toast.success(res.data.message);
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="f_01">
      <div className="f_02">
        <p className="f_03">{currentState}</p>
        <hr className="f_04" />
      </div>
      {currentState === "LogIn" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="f_05"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="f_05"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="f_05"
        placeholder="Password"
        required
      />

      <div className="f_06">
        <p className="f_07">Forgot Password</p>
        {currentState === "LogIn" ? (
          <p onClick={() => setCurrentState("SignUp")} className="f_07">
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState("LogIn")} className="f_07">
            Login Here
          </p>
        )}
      </div>
      <button className="f_08">
        {currentState === "LogIn" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};
