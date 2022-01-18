import React, { useState ,Component, useEffect} from 'react'
import Select from 'react-select'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";




const Home = () => {
    const contacts = useSelector((state)=>state)
    const [test, setTest] = useState([])
    const [inputB, setInputB] = useState("")
    const [group, setGroup] = useState([])
    const [inputList, setInputList] = useState([{field1:"",field2:"",field3:"",field4:"",field5:""}])
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        console.log(list[index])
        list[index][name] = value;
        setInputList(list);
      };
     
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };
     
      // handle click event of the Add button
      const handleAddClick = () => {
        setInputList([...inputList, { field: "" }]);
      };
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      var options1 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
      ]
      var qw = []
      var  random
      const handleChange =(e)=>{
       qw  = random = []
          
        //    console.log(e)
        e.map((item)=>{
            const {label} = item
            console.log(label)
            

            const  tester = random.includes(label)
console.log(tester,label)

// const q = test.some(label)
// console.log(q)
if(tester == false){
    random.push(label)
console.log(random)
console.log(qw)
}
if(true){

// random.filter((rItem)=>{
//     e.map((eItem)=>{
//         console.log(eItem.label ,"eItem======>>>>.",rItem  == eItem.label,"rItem ==========>",rItem)
        
//     })
// })


// e.map((eItem)=>{
//     random.filter((tItem)=>{
//         console.log(eItem.label ,"eItem======>>>>.",tItem  == eItem.label,"tItem ==========>",tItem)

//         if(tItem !== eItem.label){
//             console.log("nikalo " ,tItem )
//         }


//     })
// })

//     var ts  = test.indexOf(label)
// console.log(ts)
    // const filtered = test.filter((item)=>{
    //     return( item == label)
    // })
    // console.log(filtered)
}
//           var indexer  = test.indexOf("Strawberry")
// console.log(indexer)
// test.splice(indexer)
        })

      }
      const handleSubmit = (e) =>{
        //   const t = []
            e.preventDefault()
        // console.log("run")
        // test.map((item)=>{
        //     t.push(item.label)
        // })
        // console.log("tttts",t)
        // console.log("qw",qw)
        // console.log("random",random)
        // setTest([])
        const data = {
          d : inputB
        }
        setGroup([...group , data])
        console.log(data)


      }

        console.log(group)
useEffect(() => {
    // setTest(options1)
    console.log(test)
    console.log(qw)
}, [test,qw])
     // <Select
        // isMulti
        // options={options} 
        // onChange ={handleChange}
        // // value={test}
        
        // />
    return (
        <>
        <form onSubmit={handleSubmit}> 
   
        <input  placeholder='place karo' onChange={e => setInputB(e.target.value)}/>
        <button type="submit">
        submit
        </button>
        </form>

random
     <pre>
     
     asd{JSON.stringify(random)}
     </pre>   


     {
         /*

         <Container>
                <Row>
                <Col md={12} className="text-right">

                
                <Link to="/add" className='btn btn-outline-dark'>
                Add Contact
                
                </Link>
                </Col>
                
                </Row>
                <Row>
                <Col md={6} className="mx=auto">
        <table className="table table-hover">
        <thead className='text-white bg-dark text-center'>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
        
        </tr>
        </thead>
            <tbody>
            {contacts.map((item,id)=>{
                return(
                    <tr key={id}>
                    <td>
                    {id +1}
                    </td>
                    <td>
                    {item.name}
                    </td>
                    <td>
                    {item.email}
                    </td>
                    <td>
                    {item.number}
                    </td>
                    <td>
                    <Link to={`/edit/${item.id}`} className='btn btn-small btn-primary mr-2'>
                    Edit
                    </Link>
                    <Button to={`/edit/${item.id}`} className='btn btn-small btn-danger mr-2'>
                    Delete
                    </Button>
                    </td>
                    
                    </tr>
                )
            })}
            
            </tbody>
        
        </table>

                
                </Col>
                
                </Row>
            
            </Container>
             */
     }
        </>
    )
}

export default Home
