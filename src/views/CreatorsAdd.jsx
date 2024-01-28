import "./CreatorsPortal.css";
import React from "react"; // Add import for React if it's not already imported

const CreatorsPortal = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-4">
          <div className="col-lg-12 text-center">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder=".form-control-lg"
                    aria-label=".form-control-lg example"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Default input"
                    aria-label="default input example"
                  />
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder=".form-control-sm"
                    aria-label=".form-control-sm example"
                  />
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPortal;
