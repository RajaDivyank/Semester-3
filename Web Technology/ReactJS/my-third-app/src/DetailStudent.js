import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailStudent(){
    const navigate = useNavigate();
    const param = useParams();
  
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Student";
  
    const [data,setData] = useState({});
  
    useEffect(()=>{
      fetch(apiUrl+"/"+param.id,{method:"GET"})
      .then(res=>res.json())
      .then(res=>setData(res));
    },[]);
    return(
        <>
        <div className="card m-5" style={{width: "18rem",alignItems:"center"}}>
        <img src={data.StudentImage} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{data.StudentName}</h5>
            <p className="card-text ">
                <div>Branch : {data.StudentBranch}</div>
                <div>Email : {data.StudentEmail}</div>
                <div>Mobile : {data.StudentMobile}</div>
            </p>
            <div className="row">
            <div className="btn btn-primary col m-2"  onClick={()=>{
                fetch(apiUrl+"/"+param.id,{method:"DELETE"})
                .then((res)=>{
                navigate('/Student');
                });
             }}>DELETE</div> 
             <div className="btn btn-primary col m-2" onClick={()=>{ 
                  navigate('../Student/edit/'+param.id); 
                 }}>Edit 
            </div>
            </div>
        </div>
        </div>
        </>
    );
}