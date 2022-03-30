import React, { Component } from "react";
import Service from "../services/Service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { setErrors } from "../Components/setErrors";

const required = (value) => {
  if ((value = "")) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class AddQues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      language: "",
      difficulty: "",
      answer: "",
      hint: "",
    };

    this.changeAnswerHandler = this.changeAnswerHandler.bind(this);
    this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    this.changeDifficultyHandler = this.changeDifficultyHandler.bind(this);
    this.changeHintHandler = this.changeHintHandler.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
  }

  // validate = (question, number, language, difficulty, answer, hint) => {
  //   const errors = setErrors(
  //     question,
  //     number,
  //     language,
  //     difficulty,
  //     answer,
  //     hint
  //   );
  //   this.setState({ errors: errors });
  //   return Object.values(errors).every((err) => err === "");
  // };

  saveQuestion = (e) => {
    e.preventDefault();
    let quesbank = {
      question: this.state.question,
      answer: this.state.answer,
      language: this.state.language,
      hint: this.state.hint,
      difficulty: this.state.difficulty,
    };
    console.log("quesbank =>" + JSON.stringify(quesbank));

    //  if(this.validate(question,number,language,difficulty,answer,hint)){

    //  }

    Service.createQues(quesbank)
      .then((res) => {
        
        this.props.history.push("/list");
      })
      .catch((res) => {
        alert(res.message);
      });
    // .catch(alert("fiels most be field"));
  };

  changeAnswerHandler(event) {
    this.setState({ answer: event.target.value });
  }

  changeQuestionHandler(event) {
    this.setState({ question: event.target.value });
  }

  changeLanguageHandler(event) {
    this.setState({ language: event.target.value });
  }

  changeDifficultyHandler(event) {
    this.setState({ difficulty: event.target.value });
  }

  changeHintHandler(event) {
    this.setState({ hint: event.target.value });
  }

  cancel() {
    this.props.history.push("/list");
  }

  render() {
    return (
      <>
        <div className="container">
          <div
            className="card col-sm-6 pt-6 offset-md-3 card-border-primary
          shadow p-2 mb-3 bg-white rounded "
          >
            <h5 className="card-header">Add Question</h5>

            <form className="form-control ">
              {/* <div class="col-md-4 ">
                <label for="Question number" class="form-label ">
                  Question Number :-
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={this.state.number}
                  onChange={this.changeQuestionNoHandler}
                   
                />
                {/* {this.state.errors.question && (
                    <div className ="text-danger">
                      {this.state.errors.title}
                    </div>
                  )} */}
              {/* {this.state.errors.question && (
                  <div className= "text-danger">{this.state.errors.question} </div>
                )} */}
              {/* </div> */}

              <div className="from-group-floating row ">
                <div class="col-md-4">
                  <label class="form-label">Language :-</label>

                  <select
                    className="form-select"
                    value={this.state.language}
                    onChange={this.changeLanguageHandler}
                  >
                    <option value="Select Level">Select Language</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c">C</option>
                    <option value="c++">C++</option>
                  </select>
                </div>

                <div class="form-group col-md-4 ">
                  <label for="level" class="form-label">
                    Level :-
                  </label>
                  <select
                    className="form-select"
                    value={this.state.difficulty}
                    onChange={this.changeDifficultyHandler}
                  >
                    <option value="Select Level">Select Level</option>
                    <option value="Level1">Easy</option>
                    <option value="Level2">Moderate</option>
                    <option value="Level3">Difficult</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="question" class="form-label">
                  Write a Question:-
                </label>

                <CKEditor
                  editor={ClassicEditor}
                  data={this.state.question}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({ question: data });
                  }}
                />
              </div>
              <label for="hint" class="form-label">
                Hint:-
              </label>
              <textarea
                name="hint"
                type="text"
                className="form-control"
                cols="25"
                rows="2"
                value={this.state.hint}
                onChange={this.changeHintHandler}
                validations={required}
              ></textarea>

              <div>
                <label for="answer" class="form-label">
                  Answer:-
                </label>
                <textarea
                  name="answer"
                  type="text"
                  className="form-control"
                  cols="25"
                  rows="2"
                  value={this.state.answer}
                  onChange={this.changeAnswerHandler}
                ></textarea>
              </div>

              <button
                style={{ marginTop: "10px" }}
                type="button"
                class="btn btn-primary"
                onClick={this.saveQuestion}
              >
                Save
              </button>

              <button
                style={{ marginTop: "10px" }}
                type="button"
                class="btn btn-danger"
                onClick={this.cancel.bind(this)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
