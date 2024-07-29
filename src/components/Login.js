import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Login = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitbuttonDisabled] = useState(false);

  const handleSubmission = () => {
    event.preventDefault(); // Prevents form from reloading the page
    console.log(values);
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitbuttonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitbuttonDisabled(false);

        // redirection
        {
          alert("login suceesFull");
        }

        navigate("/");
      })
      .catch((err) => {
        setSubmitbuttonDisabled(false);
        console.log("Error - ", err.message);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <b className="font-bold text-red-600 ">{errorMsg}</b>

          <button
            type="submit"
            className={`w-full text-center py-3 rounded text-white focus:outline-none my-1 ${
              submitButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >
            Login
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Do not have an Account ?
          <a className="no-underline text-blue-600" href="../signup/">
            Create Account
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
