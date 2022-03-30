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

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';

// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


export default class ListQues extends Component {
  constructor(props) {
    super(props);
    // const [searchTitle, setSearchTitle] = useState("");
    this.state = {
      question_bank: [],
    };

    this.deleteQns = this.deleteQns.bind(this);
    this.editques = this.editques.bind(this);
  }

  editques(id) {
    this.props.history.push(`/update-ques/${id}`);
  }

  deleteQns(id) {
    Service.deleteQns(id).then((res) => {
      this.setState({
        question_bank: this.state.question_bank.filter(
          (quesbank) => quesbank.id !== id
        ),
      });
    });
  }

  componentDidMount() {
    Service.getAll().then((res) => {
      this.setState({ question_bank: res.data });
    });
  }

  // for searching
  filterContent(question_bank, searchTerm) {
    console.log(searchTerm);
    const result = question_bank.filter((post) =>
      post.question.toLowercase().includes(searchTerm)
    );
    this.setState({ question_bank: result });
  }

  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(e.currentTarget.value);

    Service.getAll().then((res) => {
      this.setState({ question_bank: res.data });
      this.filterContent({ question_bank: res.data, searchTerm });
    });
  };

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
          <h2 className="text-center">Question Bank </h2>
          {/* Add buttons */}
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a
              href="/addques"
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
                <th>Language</th>
                <th>Difficulty</th>
                <th>Hint</th>
                <th>Answer</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {this.state.question_bank.map((st) => (
                <tr key={st.id}>
                  <td dangerouslySetInnerHTML={{ __html: st.question }}></td>
                  <td>{st.language}</td>
                  <td>{st.difficulty}</td>
                  <td>{st.hint}</td>
                  <td>{st.answer}</td>

                  <td>
                    <button
                      style={{ width: "40px" }}
                      onClick={() => this.editques(st.id)}
                      className="btn btn-primary"
                    >
                      <GrUpdate />
                    </button>
                    <button
                      style={{ marginLeft: "15px", width: "40px" }}
                      onClick={() => this.deleteQns(st.id)}
                      className="btn btn-danger"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </>
    );
  }
}
