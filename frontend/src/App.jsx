import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, UserSlice } from "./utils/slice/user.slice.js";
import Home from "./components/Home.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const selector = useSelector(UserSlice)

  const fetchUser = async (token) => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_PUBLIC_BACKEND_URL + "/auth/profile",
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );
      dispatch(setUser(data.user));
      setLoading(false);
      return;
    } catch (error) {
      navigate("/login");
      return;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (!token) {
      navigate("/login");
      return;
    } else {
      async () => {
        await fetchUser(token);
      };
    }
  }, []);

  return (
    <>
      <Header />
      <Home />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
