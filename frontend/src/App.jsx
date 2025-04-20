import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, UserSlicePath } from "./utils/slice/user.slice.js";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(UserSlicePath);

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

      console.log(data.user);
      console.log(selector.user);

      dispatch(setUser(data.user));
      setLoading(false);
      return;
    } catch (error) {
      console.log("error in fetchUser : App.jsx , ", error);
      navigate("/login");
      return;
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token") || '';
  //   console.log(token);
    
  //   if (!token) {
  //     navigate("/login");
  //     return;
  //   } else {
  //     console.dir(UserSlicePath);

  //     console.log(selector);

  //     if (selector?.user) {
  //       setLoading(false);
  //       return;
  //     } else {
  //       (async () => {
  //         await fetchUser(token);
  //       })();
  //     }
  //   }
  // }, []);

  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
