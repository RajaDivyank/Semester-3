import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailFaculty(){
    const navigate = useNavigate();
    const param = useParams();
  
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Faculty";
  
    const [data,setData] = useState({});
  
    useEffect(()=>{
      fetch(apiUrl+"/"+param.id,{method:"GET"})
      .then(res=>res.json())
      .then(res=>setData(res));
    },[]);
    return(
        <>
          <div className="container">
            <div className="profile-box">
                <img src="menu.png" className="menu-icon" />
                <img src="setting.png" className="setting-icon" />
                <img src={data.FacultyImage} className="profile-pic" />
                <h3>{data.FacultyName}</h3>
                <div className="social-media">
                  <img src="instagram.png" />
                  <img src="telegram.png" />
                  <img src="dribble.png" />
                </div>
                <button type="button"> Follow</button>
                <div className="profile-bottom">
                      <div className="data">Email : {data.FacultyEmail}</div>
                      <div className="data">Salary : {data.FacultySalary} </div>
                      <div className="data">Mobile Number : {data.FacultyMobileNo}</div>
                      <div className="row">
                      <div className="btn btn-primary col  hello"  onClick={()=>{
                          fetch(apiUrl+"/"+param.id,{method:"DELETE"})
                          .then((res)=>{
                          navigate('/Faculty');
                          });
                          }}>DELETE</div> 
                          <div className="btn btn-primary col  hello" onClick={()=>{ 
                          navigate('../Faculty/edit/'+param.id); 
                          }}>Edit 
                          </div>
                      </div>
                </div>
            </div>
          </div>
        {/* <div className="card m-5" style={{width: "18rem",alignItems:"center"}}>
        <img src={data.FacultyImage} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{data.FacultyName}</h5>
            <p className="card-text ">
                <div>Email : {data.FacultyEmail}</div>
                <div>Salary : {data.FacultySalary}</div>
                <div>Mobile : {data.FacultyMobileNo}</div>
            </p>
            <div className="row">
            <div className="btn btn-primary col m-2"  onClick={()=>{
                fetch(apiUrl+"/"+param.id,{method:"DELETE"})
                .then((res)=>{
                navigate('/Faculty');
                });
             }}>DELETE</div> 
             <div className="btn btn-primary col m-2" onClick={()=>{ 
                  navigate('../Faculty/edit/'+param.id); 
                 }}>Edit 
            </div>
            </div>
        </div>
        </div> */}
        </>
    );
}