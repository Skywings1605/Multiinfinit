import {useState,useEffect} from 'react'
import axios from 'axios'
import "./Form.css"
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// <!-- Add event to the button's click handler -->

export const Form = () => {
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate()

  // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');

  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit=(e)=>{
    console.log("clicked")
    e.preventDefault();
    console.log(name, phone, email);
    // our object to pass
    const data = {
      Name:name,
      Email:email,
      Phone:phone,
    }
    axios.post('https://sheet.best/api/sheets/ae0e893a-263a-4c1d-85bd-9c26977afcce',data).then(response=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
    })
    setSubmit(true)
    navigate("/thankyou")
    qp('track', 'Generic'); 
  }

  return (
    <div className="formdi">
      <h3 className='formh3'>BOOK A FREE SITE VISIT</h3>
      {/* <br></br> */}
      <form autoComplete="off" className='form-group'
      onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' id='in1' className='form-control fin' required
          placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Phone Number</label>
        <input type='tel' pattern='[6-9]{1}[0-9]{9}' id='in2' className='form-control fin' required
          placeholder='Enter your Mobile number' onChange={(e)=>setPhone(e.target.value)}
          value={phone}
        />
        <br></br>
        <label>Email</label>
        <input type='email' id='in3' className='form-control fin' required
          placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
        <button type='submit' className='btn btn-primary' style={{backgroundColor:"blue"}}>
             {name != "" && phone != "" && email != "" ? "Submit":"Submit"}</button>
        </div>
      </form>
    </div>
  );
}
