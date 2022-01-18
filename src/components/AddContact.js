import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {

  const [state, setState] = useState({
      name:"",
      email:"",
      number:"",

  });

  const contacts = useSelector((state)=> state)
   const dispatch = useDispatch()
   const history = useHistory()
console.log("state =====>",contacts)
const handleChange = (e ) =>{
    const {name ,value} = e.target;
    

    setState({...state, [name]:value})



}
const handleSubmit= (e) =>{
    e.preventDefault()
    const checkEmail = contacts.find(check=> check.email == state.email && state.email)

    if(!state.email || !state.name || !state.number){
        return toast.warn("fill all fields")
    }
    console.log("submited")
    console.log(checkEmail)
  
    const data = {
        id:contacts.length,
        name: state.name,
        email: state.email,
        number: state.number,
        
        }
        console.log(data)
        if(checkEmail){
            toast.error("email already Exists")
        }
        else{

            dispatch({type:"ADD_CONTACT",payload : data})
            history.push("/")


        }

}

  return (
    <Container>
      <Row>
        <Col>
        
        
        </Col>

      </Row>

<Row>
<Col md={6} className="shadow mx-auto">
<form onSubmit={handleSubmit}>

<div className="form-group">
<input className="form-control" type="text" required value={state.name} onChange={(e) => handleChange(e)}  name="name" placeholder="name"/>
 

</div>
<div className="form-group">
<input className="form-control" type="emai" value={state.email} onChange={(e) => handleChange(e)} name="email" placeholder="email"/>
 

</div>
<div className="form-group">
<input className="form-control" type="number" value={state.number} onChange={(e) => handleChange(e)} name="number" placeholder="number"/>
 

</div>
<div>
<Button type="submit" className="btn-block btn-dark">
 Add Student
</Button>
</div>
</form>

</Col>

</Row>


    </Container>
  );
};

export default AddContact;
