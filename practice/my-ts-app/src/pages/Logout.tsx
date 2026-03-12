import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ():null => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    localStorage.setItem("data","");
    navigate("/login");
  }, []);

  return null;
};

export default Logout;