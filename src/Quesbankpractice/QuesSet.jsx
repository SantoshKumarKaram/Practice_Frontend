import React from "react";

function QuesSet() {
  return (
    <>
      <div className="container">
        <div class="card col-md-6 pt-6 offset-md-3 card-border-primary shadow p-2 mb-2 bg-white rounded">
          <h5 class="card-header">Welcome</h5>
          <div class="card-body">
            <h5 class="card-title">Qeustion Bank</h5>
            <p> Here you can add Questions and see it.</p>
          </div>

          <a href="/addques" className="btn btn-primary">
          Add
          </a>
          <a
            href="/list"
            style={{ marginBottom: "20px" }}
            className="btn btn-primary"
          >
            View
          </a>
        </div>

        {/* <div className="card col-sm-6 pt-6 offset-md-3 card-border-primary " >
  <h5 className="card-header">Add Question</h5> */}
      </div>
    </>
  );
}

export default QuesSet;
