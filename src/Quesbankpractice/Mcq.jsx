import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Service from "../Services/Service";
export default class Mcq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mquestion: "",
      mlang:"",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      ans: "",
    };

    this.changeMAnswerHandler = this.changeMAnswerHandler.bind(this);
    this.ChangeMLangHandler = this.ChangeMLangHandler.bind(this);
    this.changeMquestionHandler = this.changeMquestionHandler.bind(this);
    this.changeOption1Handler = this.changeOption1Handler.bind(this);
    this.changeOption2Handler = this.changeOption2Handler.bind(this);
    this.changeOption3Handler = this.changeOption3Handler.bind(this);
    this.changeOption4Handler = this.changeOption4Handler.bind(this);
    this.saveMquestion = this.saveMquestion.bind(this);
  }

  saveMquestion = (e) => {
    e.preventDefault();
    let mcq = {
      mquestion: this.state.mquestion,
      mlang:this.state.mlang,
      ans: this.state.ans,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
    };
    console.log("mcq =>" + JSON.stringify(mcq));
    Service.createMques(mcq)
      .then((res) => {
        this.props.history.push("/listmcq");
      })
      .catch((res) => {
        alert(res.message);
      });
    // .catch(alert("fiels most be field"));
  };

  changeMAnswerHandler(event) {
    this.setState({ ans: event.target.value });
  }

  changeMquestionHandler(event) {
    this.setState({ mquestion: event.target.value });
  }

  ChangeMLangHandler(event){
    this.setState({mlang: event.target.value});
  }

  changeOption1Handler(event) {
    this.setState({ option1: event.target.value });
  }

  changeOption2Handler(event) {
    this.setState({ option2: event.target.value });
  }
  changeOption3Handler(event) {
    this.setState({ option3: event.target.value });
  }

  changeOption4Handler(event) {
    this.setState({ option4: event.target.value });
  }

  cancel() {
    this.props.history.push("/listmcq");
  }

  render() {
    return (
      <>
        <div className="container">
          <div
            className="card col-sm-6 pt-6 offset-md-3 card-border-primary
        shadow p-2 mb-3 bg-white rounded "
          >
            <h5 className="card-header">MCQ</h5>
            <form className="form-control">
            <div className="from-group-floating row ">
                <div class="col-md-4">
                  <label class="form-label">Language :-</label>

                  <select
                    className="form-select"
                    value={this.state.mlang}
                    onChange={this.ChangeMLangHandler}
                  >
                    <option value="Select Level">Select</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c">C</option>
                    <option value="c++">C++</option>
                  </select>
                </div></div>
              <div class="form-class">
                <label for="question" class="form-label">
                  Write a Question:-
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={this.state.mquestion}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({ mquestion: data });
                  }}
                />
              </div>
              <div class="form-floating">
                
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="option1"
                  value={this.state.option1}
                  onChange={this.changeOption1Handler}
                />

                <label for="floatingoption1">Option1</label>
              </div>

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="option2"
                  value={this.state.option2}
                  onChange={this.changeOption2Handler}
                />
                <label for="floatingoption2">Option2</label>
              </div>

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="option3"
                  value={this.state.option3}
                  onChange={this.changeOption3Handler}
                />
                <label for="floatingoption3">Option3</label>
              </div>

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="option4"
                  value={this.state.option4}
                  onChange={this.changeOption4Handler}
                />
                <label for="floatingoption4">Option4</label>
              </div>

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="answer"
                  value={this.state.ans}
                  onChange={this.changeMAnswerHandler}
                />
                <label for="floatingoption1">Answer</label>
              </div>

              <button
                style={{ marginTop: "10px" }}
                type="button"
                class="btn btn-primary"
                onClick={this.saveMquestion}
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
