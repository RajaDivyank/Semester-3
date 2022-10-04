import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function MyApi(){
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:2003/students')
    .then((res)=>res.json())
    .then((res)=>{setData(res)});
  },[])

  const formatStudent = data.map((stu)=>{
    return <h1>{stu.StudentName}</h1>
  })
  return formatStudent;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <MyApi/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
