import React, { useState } from "react";
import HOCModal from "../../HOC/HOCModal";
import Login from "../Login";
import Register from "../Register";
import ContainerModal from "../../HOC/ContainerModal";
import { useDispatch } from "react-redux";
import { setModalAction } from "../../redux/reducers/modalReducer";
import Home from "../Home";

/*
    HOC : Higher order component
    Component chứa 1 component khác =
    > tạo ra 1 component mới chưa logic của component đó
    Vi dụ : Modal thông tin lớp học, Modal thông tin lộ trình
*/

// Tạo ra 1 component login chứa trong modal
const LoginModal = new HOCModal(Login);
const RegisterModal = new HOCModal(Register);
export default function DemoHOC() {
  const [component, setComponent] = useState(<Login />);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {/* <RegisterModal /> */}
      <button
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        className="btn btn-primary mx-2"
        onClick={() => {
          {
            // setComponent(<Login />);
            const action = setModalAction(<Login />);
            dispatch(action);
          }
        }}
      >
        Login
      </button>
      <button
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        className="btn btn-success mx-2"
        onClick={() => {
          {
            // setComponent(<Register />);
            const action = setModalAction(<Register />);
            dispatch(action);
          }
        }}
      >
        Register
      </button>
      <button
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        className="btn btn-success mx-2"
        onClick={() => {
          {
            // setComponent(<Register />);
            const action = setModalAction(<Home />);
            dispatch(action);
          }
        }}
      >
        Home
      </button>
      {/* <ContainerModal component={component} /> */}
    </div>
  );
}
