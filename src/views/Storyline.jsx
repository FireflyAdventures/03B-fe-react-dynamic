import React from "react";
import "../App.css";

const Storyline = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* Bootstrap Container*/}
        <div class="container">
          <div class="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
          </div>
        </div>
        <div className="container-fluid white-bg">
          <div className="row">
            <div className="col-md-4">
              {/* Left Column (4/12 width) */}
              <h6> TEST TEXT</h6>
              <div className="row">
                <div className="col-md-12">
                  {/* Top Left Square with Image */}
                  <h6> TEST TEXT</h6>
                  <div className="image-container">
                    <img
                      src="https://storage.googleapis.com/260367420810-us-central1-blueprint-config/firefly-tiered-app/storyassets/helen-wold-01S-cover.png"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  {/* Add other content for the left column */}
                  <h6> TEST TEXT</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* Middle Column (4/12 width) */}
              <h6> TEST TEXT</h6>
              <div className="row">
                <div className="col-md-12">
                  {/* Add content for the middle column */}
                  <h6> TEST TEXT</h6>
                </div>
                <div className="col-md-12">
                  <h6> TEST TEXT</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {/* Right Column (4/12 width) */}
              <h6> TEST TEXT</h6>
              <div className="row">
                <div className="col-md-12">
                  {/* Chat Container in the Right Column */}
                  <h6> TEST TEXT</h6>
                  <div className="chat-container">
                    {/* Add chat content here */}
                    <h6> TEST TEXT</h6>
                  </div>
                </div>
                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Storyline;
