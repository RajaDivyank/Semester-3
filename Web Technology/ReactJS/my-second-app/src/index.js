import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AcademicCalculator from './AcademicCalculator';
import Attendance from './Attendance';
import Feedback from './Feedback';
import Fees from './Fees';
import './index.css';
import Layout from './Layout';
import LMS from './LMS';
import MainContent from './MainContent';
import Notification from './Notification';
import reportWebVitals from './reportWebVitals';
import Result from './Results';
import TimeTable from './TimeTable';
import Transport from './Transport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route  index element={<AcademicCalculator/>}></Route>
        <Route path="TimeTAble" element={<TimeTable/>} ></Route>
        <Route path="Attendance" element={<Attendance/>} ></Route>
        <Route path="LMS" element={<LMS/>} > </Route>
        <Route path="Feedback" element={<Feedback/>} ></Route>
        <Route path="Fees" element={<Fees/>} ></Route>
        <Route path="Transport" element={<Transport/>} ></Route>
        <Route path="Notification" element={<Notification/>} ></Route>
        <Route path="Result" element={<Result/>} ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
