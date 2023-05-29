import React from "react";
// import outlet từ react router dom
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ResposiveTemplate from "./ResposiveTemplate";
import BottomTab from "../components/BottomTab";
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
        {/* Đại diện cho các component route loan lên thẻ này */}
      </div>
      <ResposiveTemplate component={Footer} mobileComponent={BottomTab} />
    </div>
  );
}
function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 fs-3">Footer</footer>
  );
}
