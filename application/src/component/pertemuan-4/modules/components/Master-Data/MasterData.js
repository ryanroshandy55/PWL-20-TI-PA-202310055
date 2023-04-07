import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class MasterData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Products", link: "/master-data/products" },
        { id: 2, name: "Users", link: "/master-data/users" },
      ],
    };
  }
  render() {
    return (
      <div id="master-data" className="container">
        <div className="row items mb-5 justify-content-center">
          {this.state.items.map((v, index) => (
            <div className="col-sm-12 col-lg-3 item btn btn-outline " data-bs-toggle="button" key={index}>
              <NavLink to={v.link} className="card bg-white text-decoration-none text-hover-primary" data-bs-toggle="button">
                <div className="card-body text-center">
                  <h3 className="text-dark">{v.name}</h3>
                  <p className="mb-0 text-muted">Master data control {v.name}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="">
            <Outlet />
        </div>
      </div>
    );
  }
}
