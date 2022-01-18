import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import StripeContainer from './components/StripeContainer';
import $ from "jquery"; //Load jquery
import React, { Component, createRef } from "react"; //For react component
import ReactDOM from "react-dom";
window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

//For Load Selected Elements. Not compulsory. If you don't want this. Don't pass formData in below formBuilder initialize.
const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];

document.body.style.margin = "30px"; //For add margin in HTML body

//Initialize formBuilder 
class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}

function App() {


  
  return (
    <>
    <Router>
<ToastContainer/>
<Navbar/>
<Switch>
<Route exact path="/">
<StripeContainer/>
<FormBuilder/>
</Route>

    <Route exact path="/Add">
<AddContact/>
    </Route>
    <Route exact path="/edit/:id">
<EditContact/>
    </Route>
</Switch>


</Router>

    </>
  );
}

export default App;
