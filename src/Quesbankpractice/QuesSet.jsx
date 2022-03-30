import React from "react";
import Button from "@restart/ui/esm/Button";
import Navbar from "../Common/Navbar";
function QuesSet() {
  return (
    <>
    <Navbar /> 
      <div className="container">
        <div class="card col-md-6 pt-6 offset-md-3 card-border-primary shadow p-2 mb-2 bg-white rounded">
          <h5 class="card-header">Welcome</h5>

          <div class="card-body">
            <h5 class="card-title">Question Bank</h5>
            <p> Here you can add Questions.</p>
          </div>
          
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>
        </div>

        {/* //Modal */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Question type
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Select the question type</div>
              <div class="modal-footer">
                <a
                  href="/listmcq"
                  style={{ marginBottom: "10px" }}
                  className="btn btn-primary"
                >
                  Mcq
                </a>
                <a
                  href="/list"
                  style={{ marginBottom: "10px" }}
                  className="btn btn-primary"
                >
                  Short
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuesSet;
