import { useContext } from "react";
import AppContext from "../contexts/appContext";
const useLogIn = () => {
  const { appLogin } = useContext(AppContext);

  const login = async ({ email, password }) => {
    try {
      const URL = "http://localhost:3000/api/v1/auth/login";
      const OPTIONS = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };

      const res = await fetch(URL, OPTIONS);
      const data = await res.json();
      console.log("my data", data);

      if (data.status === "success") {
        appLogin(data.data.user);
        localStorage.setItem("authorization", data.data.token);
      } else {
        alert("Error:", data.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return { login };
};

export default useLogIn;
