import "./index.css";
import TotalCompForm from "./components/TotalCompForm";
import {useState} from 'react'
import TotalCompList from "./components/TotalCompList";

export default function App() {
  const [arr,setArr] = useState([])
  function compArrHandler(compArr){
    setArr( prev => prev.concat(compArr))
    // console.log(arr)
  }
  return <div className="container">
  <TotalCompForm getCompArr = {compArrHandler} />
  <TotalCompList compareArr = {arr}/>
</div>;
}
