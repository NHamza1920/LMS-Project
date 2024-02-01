import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../category/Category";

const Home = () => {
  const isUserLoggedin = sessionStorage.getItem("isUserLoggedin")
    ? sessionStorage.getItem("isUserLoggedin")
    : false;

  const navigate = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      navigate("/login");
    }
  }, []);

  return <div>{isUserLoggedin && <Category />}</div>;
};

export default Home;
