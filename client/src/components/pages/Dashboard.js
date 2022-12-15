import React from "react";
import { Link } from "react-router-dom";
import Logout from '../nav/Logout.js';

const Dashboard = () => {
  return (
    <div
      class="row"
      style={{"height" : "800px"}}
    >
      <div class="col-2 border-top mx-auto pt-4 h-100 bg-light viewport-height-content">
        <div id="sidebar">
          <h2 className="text-center mb-4 fw-bold">Dashboard</h2>
          <div className="row">
            <div className="col-lg-12 col-sm-6 col-12 ml-">
              <h6 class="p-1 border-bottom fw-bold">Components</h6>
              <ul>
                <li className="text-center">
                  <a href="#">
                    <nav class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-link active"
                        id="nav-activities-tab"
                        data-bs-toggle="tab"
                        href="#nav-activities"
                        role="tab"
                        aria-controls="nav-activities"
                        aria-selected="true"
                      >
                        Activities
                      </a>
                      <a
                        class="nav-link"
                        id="nav-products-tab"
                        data-bs-toggle="tab"
                        href="#nav-products"
                        role="tab"
                        aria-controls="nav-products"
                        aria-selected="false"
                      >
                        Products
                      </a>
                      <a
                        class="nav-link users"
                        id="nav-users-tab"
                        data-bs-toggle="tab"
                        href="#nav-users"
                        role="tab"
                        aria-controls="nav-users"
                        tabindex="-1"
                        aria-selected="false"
                      >
                        Users
                      </a>
                    </nav>
                  </a>
                </li>
              </ul>
              <div class="mt-5 text-center"><Logout/></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-10 border">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane show active"
            id="nav-activities"
            role="tabpanel"
            aria-labelledby="nav-activities-tab"
          >
            <div className="row viewport-height-content">
              <div className="col-6 border">
                <h1>getAllActivities</h1>
              </div>
              <div className="col-6 border">
                <h1>Activities Create Form</h1>
                <span></span>
              </div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="nav-products"
            role="tabpanel"
            aria-labelledby="nav-products-tab"
          >
            <div className="row viewport-height-content">
              <div className="col-6 border">
                <h1>getAllProducts</h1>
              </div>
              <div className="col-6 border">
                <h1>Products Create Form</h1>
                <span></span>
              </div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="nav-users"
            role="tabpanel"
            aria-labelledby="nav-users-tab"
          >
            <div className="row viewport-height-content">
              <div className="col-6 border">
                <h1>getAllUsers</h1>
              </div>
              <div className="col-6 border">
                <h1>Users Create Form</h1>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
