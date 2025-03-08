import "./App.css";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import Gleb from "./Gleb/Gleb";
// import AuthLayout from "./pages/AuthLayout/AuthLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import Loader from "./Loader/Loader";
import Layout from "./Layout/Layout";
import { Suspense } from "react";

// import AuthLayout from "./AuthLayout/AuthLayout";

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {<Route index element={<HomePage />} />}

            {/* <Route element={<AuthLayout />}></Route> */}
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="register" element={<Register />} /> */}
            <Route path="Gleb" element={<Gleb />}></Route>
            {/* </Route> */}
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
