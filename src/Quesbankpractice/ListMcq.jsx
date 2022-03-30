import React, { Component } from "react";
import { useState } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import Service from "../services/Service";
import { RiDeleteBinLine, RiAddFill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import {} from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { Form, FormControl, Button } from "react-bootstrap";
import { GrUpdate } from "react-icons/gr";
import { GlobalFilter } from "./GlobalFilter";

export default class ListQues extends Component {
  constructor(props) {
    super(props);
    // const [searchTitle, setSearchTitle] = useState("");
    this.state = {
      mcq_ques: [],
    };

     this.deleteMQns = this.deleteMQns.bind(this);
    // this.editques = this.editques.bind(this);
  }

//   editques(id) {
//     this.props.history.push(`/update-ques/${id}`);
//   }

  deleteMQns(id) {
    Service.deleteMQns(id).then((res) => {
      this.setState({
        mcq_ques: this.state.mcq_ques.filter(
          (mcq) => mcq.id !== id
        ),
      });
    });
  }

  componentDidMount() {
    Service.getAllMcq().then((res) => {
      this.setState({ mcq_ques: res.data });
    });
  }

  

  render() {
    return (
      <>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        {/* <a href="/Home" className="ms-5"><MdArrowBackIosNew />
                </a> */}
        <div className="mt-3 mx-5">
          <a class="pr-3" href="/" role="button">
            <AiOutlineHome />{" "}
          </a>{" "}
          QUESTIONBANK
        </div>
        <div className=" container shadow-lg mt-5 table-data bg-light">
          <h2 className="text-center">Mcq Bank </h2>
          {/* Add buttons */}
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            href="/addmcq"
            style={{ width: "40px" }}
            className="btn btn-primary md-1"
          >
            <MdLibraryAdd />
          </a>
            
          </div>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid row-4 col-md-4 ">
              <form class=" d-flex ">
                {/* search box */}
                {/* <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search question"
                  onChange={this.handleTextSearch}
                  aria-label="Search"
                /> */}
              </form>
            </div>
          </nav>

          {/* <div className="row"> */}
          <table className="table table-striped   table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Question</th>
                <th>Option1</th>
                <th>Option2</th>
                <th>Option3</th>
                <th>Option4</th>
                <th>Answer</th>
              </tr>
            </thead>

            <tbody>
              {this.state.mcq_ques.map((mc) => (
                <tr key={mc.id}>
                  <td dangerouslySetInnerHTML={{ __html: mc.mquestion }}></td>
                  <td>{mc.option1}</td>
                  <td>{mc.option2}</td>
                  <td>{mc.option3}</td>
                  <td>{mc.option4}</td>
                  <td>{mc.ans}</td>

                  <td>
                    <button
                      style={{ width: "40px" }}
                    //   onClick={() => this.editques(st.id)}
                      className="btn btn-primary"
                    >
                      <GrUpdate />
                    </button>
                    <button
                      style={{ marginLeft: "15px", width: "40px" }}
                      onClick={() => this.deleteMQns(mc.id)}
                      className="btn btn-danger"
                    >
                      <RiDeleteBinLine />
                    </button>

                    {/* <button style={{ marginLeft: "15px" }} onClick={() => this.viewStop(stop.id)} className="btn btn-info"><GrView /> </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </>
    );
  }
}
