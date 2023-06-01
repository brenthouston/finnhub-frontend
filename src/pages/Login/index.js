import React from "react";
import "./style.css";


export default function Login() {
  return (
    <div className="col">
      <div className="container">
        <h3 style={{ marginLeft: "0", textAlign: "center", margin: "50px", fontSize:"4rem"}}>
          Welcome Back!
        </h3>
      </div>

      <div className="container col-lg-6 mb-5 mb-lg-0">
        <div className="card" style={{ background: "var(--cardGrn)" }}>
          <div
            className="card-body py-5 px-md-5"
            style={{ background: "var(--cardGrn)" }}
          >
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label
                      className="form-label"
                      for="form3Example1"
                      style={{ color: "var(--primary)" }}
                    >
                      First name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label
                      className="form-label"
                      for="form3Example2"
                      style={{ color: "var(--primary)" }}
                    >
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "var(--primary)" }}
                >
                  Email address
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                />
                <label
                  className="form-label"
                  for="form3Example4"
                  style={{ color: "var(--primary)" }}
                >
                  Password
                </label>
              </div>

              {/* Submit */}
              <div className="d-flex justify-content-center">
                <button
                  style={{
                    backgroundColor: "var(--accentPlum)",
                    color: "var(--primary)",
                  }}
                  type="submit"
                  className="btn mb-4"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
              <h3
                style={{ marginLeft: "0", textAlign: "center", color:"var(--accentDark)", margin:"20px", fontSize:"1.5rem"  }}
              >
                Trading. Connecting. Thriving.
              </h3>
            </div>
    </div>
  );
}
