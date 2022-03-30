import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import ListQues from "./Quesbankpractice/ListQues";
import Navbar from "./Common/Navbar";
import QuesSet from "./Quesbankpractice/QuesSet";
import AddQues from "./Quesbankpractice/AddQues";
import Updateques from "./Quesbankpractice/Updateques";
import Mcq from "./Quesbankpractice/Mcq";
import ListMcq from "./Quesbankpractice/ListMcq";
import SingIn from "./Common/SingIn";
import SignUp from "./Common/SignUp";
function App() {
  return (
    <div>
     
      {/* <Test/> */}
      <Switch>
        <Route exact path="/signin" component={SingIn} />
        <Route exact path="/signup" component={SignUp} />
        
        <Route exact path="/" component={QuesSet} />
        
        <Route exact path="/list" component={ListQues} />
        <Route exact path="/addques" component={AddQues} />
        <Route exact path="/update-ques/:id" component={Updateques} />
        <Route exact path="/addmcq" component={Mcq} />
        <Route exact path="/listmcq" component={ListMcq} />
        {/* <Route exact path="/test" component={test} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
