import React, { Component } from 'react'
import { useState } from 'react';
import Service from '../Services/Service';
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

import {Form,FormControl,Button} from "react-bootstrap";


import { GrUpdate } from "react-icons/gr";

export default class ListQues extends Component {
    
    constructor(props) {
        super(props)
        // const [searchTitle, setSearchTitle] = useState("");
        this.state = {
            question_bank: []
        }
       
        // this.editStop = this.editStop.bind(this);
        this.deleteQns = this.deleteQns.bind(this);
      
    }
 
 


    deleteQns(id) {
        Service.deleteQns(id).then(res => {
            this.setState({ question_bank: this.state.question_bank.filter(quesbank  => quesbank.id !== id) });
        });
    }

    // editStop(id) {
    //     this.props.history.push(`/update-stop/${id}`);
    // }

    
    componentDidMount() {
        Service.getAll().then((res) => {
            this.setState({ question_bank: res.data });
        });
    }
   

   // for searching
    filterContent(question_bank ,searchTerm){
        console.log(searchTerm);
        const result = question_bank.filter((post) => post.question.toLowercase().includes(searchTerm));
        this.setState({question_bank:result});
    }

    handleTextSearch =(e)=>{
        const searchTerm = e.currentTarget.value;
        console.log(e.currentTarget.value);
       
        Service.getAll().then((res) => {
            this.setState({ question_bank: res.data});
            this.filterContent({question_bank: res.data,searchTerm})
           
        });
        }
       
    

    render() {
        return (
            <>
                {/* <a href="/Home" className="ms-5"><MdArrowBackIosNew />
                </a> */}
                <div className="mt-3 mx-5">
                <a class="pr-3" href="/" role="button"><AiOutlineHome/> </a> QUESTIONBANK
                </div>
                <div className=" container shadow-lg mt-5 table-data bg-light" >
                    
                    <h2 className="text-center">Question Bank </h2>
                    
                    <nav class="navbar navbar-light bg-light">
                       <div class="container-fluid row-4 col-md-4 ">
                         <form class=" d-flex ">
                          <input class="form-control me-2" type="search" placeholder="Search question" 
                           onChange={this.handleTextSearch}
                          aria-label="Search"/>
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

                            <tbody >
                                {
                                    this.state.question_bank.
                                    
                                    map(
                                        st =>
                                            <tr key={st.id}>
                                                 
                                                <td dangerouslySetInnerHTML = {{__html:st.question}}></td>
                                                <td>{st.language}</td>
                                                <td>{st.difficulty}</td>
                                                <td>{st.hint}</td>
                                                <td>{st.answer}</td>

                                                
                                                    <td>
                                                     <button  style={{ width:"40px" }}onClick={() => this.editStop(st.id)} className="btn btn-primary"><GrUpdate/></button> 
                                                     <button style={{ marginLeft: "15px",width:"40px" }} onClick={() => this.deleteQns(st.id)} className="btn btn-danger"><RiDeleteBinLine/></button> 

                                                    {/* <button style={{ marginLeft: "15px" }} onClick={() => this.viewStop(stop.id)} className="btn btn-info"><GrView /> </button> */}
                                                    </td>

                                            </tr>
                                    )
                                }</tbody>

                        </table>
                    {/* </div> */}
                </div>
            </>
        )
    }
}
