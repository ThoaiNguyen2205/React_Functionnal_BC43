import React from "react";
import { history } from "../index";
import useFetchData from "../CustomHook/useFetchData";
import { NavLink } from "react-router-dom";
export default function HomeMobile() {
  const data = useFetchData("https://shop.cyberlearn.vn/api/product");
  return (
    <div>
      Home
      <br />
      <button
        className="btn btn-dark"
        onClick={() => {
          history.push("/movie");
        }}
      >
        {" "}
        Chuyển hướng
      </button>
      <div className="container">
        <h3>Shoes shop</h3>

        {data.map((item, index) => {
          return (
            <div className="row mt-2" key={index}>
              <div className="col-2">
                <img src={item.image} alt="" />
              </div>

              <div className="col-10">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="col-12">
                <h3>{item.price}</h3>
                <NavLink to={`/detail ${item.id}`} className="btn btn-dark">
                  View detail
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
