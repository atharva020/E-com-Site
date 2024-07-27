import React from "react";
import Adminmenu from "../../components/Layout/Adminmenu";
import Layout from "../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9"></div>
          <h1>All users</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
