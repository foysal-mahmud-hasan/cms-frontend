import Layout from "./components/layout/Layout";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}
