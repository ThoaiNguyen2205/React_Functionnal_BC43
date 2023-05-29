import React from "react";
import { Avatar, Badge, Space } from "antd";
import { NavLink } from "react-router-dom";

export default function BottomTab() {
  return (
    <div className="bg-dark ">
      <div className="row text-center">
        <div className="col-4">
          <NavLink to="/profile">
            <Badge count={99}>
              <i className="fa fa-user fs-3 text-white"></i>
            </Badge>
          </NavLink>
        </div>
        <div className="col-4">
          <NavLink to="/">
            <Badge count={99}>
              <i className="fa fa-home fs-3 text-white"></i>
            </Badge>
          </NavLink>
        </div>

        <div className="col-4">
          <NavLink to="/login">
            <Badge count={99}>
              <i className="fa fa-cog fs-3 text-white"></i>
            </Badge>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
