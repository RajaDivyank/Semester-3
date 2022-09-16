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
import "./Add.css";
import Layout from './Layout';
import AddFaculty from './AddFaculty';
import EditFaculty from './EditFaculty';
import GetAllPrinter from './GetAllPrinter';
import AddPrinter from './AddPrinter';
import EditPrinter from './EditPrinter';
import DetailPrinter from './DetailPrinter';


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
          <Route path="/Faculty/add" element={<AddFaculty/>} ></Route>
          <Route path="/Faculty/edit/:id" element={<EditFaculty/>} ></Route>
          
          <Route path="/Printer" element={<GetAllPrinter/>} ></Route>
          <Route path="/Printer/add" element={<AddPrinter/>} ></Route>
          <Route path="/Printer/edit/:id" element={<EditPrinter/>} ></Route>
          <Route path="/Printer/:id" element={<DetailPrinter/>} ></Route>
        </Route>
    </Routes>
  </BrowserRouter>
);
