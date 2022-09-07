import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddStudent from './AddStudent';
import DetailFaculty from './DetailFaculty';
import DetailStudent from './DetailStudent';
import EditStudent from './EditStudent';
import GetAllFaculty from './GetAllFaculty';
import GetAllStudent from './GetAllStudent';
import  Home  from './Home';
import './index.css';
import "./Detail.css";
import Layout from './Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element= {<Home/>}></Route>
          <Route path="/Student" element={<GetAllStudent />}></Route>
          <Route path="/Student/add" element={<AddStudent/>}></Route>
          <Route path="/Student/edit/:id" element={<EditStudent/>}></Route>
          <Route path="/Student/:id" element={<DetailStudent/>}></Route>
          <Route path="/Faculty" element={<GetAllFaculty/>} ></Route>
          <Route path="/Faculty/:id" element={<DetailFaculty/>} ></Route>
        </Route>
    </Routes>
  </BrowserRouter>
);
