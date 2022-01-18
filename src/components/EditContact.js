import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditContact = () => {
    const {id} = useParams()
    const history = useHistory()
    const [data, setData] = useState()
     const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [state, setState] = useState({
        name:"",
  
    });
    var obj
    const contacts = useSelector((state)=> state)
    useEffect(() => {
    
        const user = contacts.find((item)=>{
            return item.id == id 
        })
       

        console.log(user.name)
        setName(user.name) 
        setEmail(user.email) 
        setNumber(user.number) 
        

    }, [])

  const handleChange = (e ) =>{
      const {name ,value} = e;
  
      setState({...state, [name]:value})
  }
  const handleSubmit= (e) =>{
      e.preventDefault()
      const data = {id, name,email,number}
      console.log(data)
      dispatch({
          type:"UPDATE_CONTACT",payload:data
      })
      history.push("/")

      

console.log("submits")

  }
    return (
        <Container>
        <Row>
          <Col>
          
          
          </Col>
  
        </Row>
  
  <Row>
  <Col md={6} className="shadow mx-auto">
  Edit Student {id}
  <form onSubmit={handleSubmit}>
  
  <div className="form-group">
  <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="add c ontact"
  
  />
   
  
  </div>
  <div className="form-group">
  <input className="form-control" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="add contact"/>
   
  
  </div>
  <div className="form-group">
  <input className="form-control" type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="add contact"/>
   
  
  </div>
  <div>
  <Button type="submit" className="btn-block btn-dark">
   update 
  </Button>
  <Link  className="ml-5 btn btn-block btn-dark">
   cancel 
  </Link>
  </div>
  </form>
  
  </Col>
  
  </Row>
  
  
      </Container>
    )
}

export default EditContact
