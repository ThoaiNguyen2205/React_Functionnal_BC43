import React from "react";
import { history } from "../index";
import useFetchData from "../CustomHook/useFetchData";
import { NavLink } from "react-router-dom";
export default function Home() {
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
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-3 mt-2" key={index}>
                <div className="card">
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <NavLink to={`/detail ${item.id}`} className="btn btn-dark">
                      View detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
