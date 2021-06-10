import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [num, setNum] = useState(0);
  const [newnum, setNewNum] = useState(0);

  useEffect(() => {
    alert("Hi")
    console.log("I am clicked");
  },[num])      // if we give [] than bs starting m ek hi baar chalega
  return (
    <>
      <button className="btn btn-primary" onClick={()=>{setNum(num+1);}}>Click me {num}</button>
      <br />
      <button className="btn btn-warning" onClick={()=>{setNewNum(newnum+1);}}>Click me {newnum}</button>
      {/* <button className="btn btn-primary" onClick={()=>{setNum(num+1);},()=>{alert("Hi")}}>Click me</button> */}
      {/* We cant call both of them simultanously */}
    </>
  )
}

export default App;
