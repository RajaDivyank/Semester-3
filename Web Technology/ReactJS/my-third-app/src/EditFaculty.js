import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditFaculty(){
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Faculty";

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
      },[]);

     const [data,setData] = useState({}); 
    return(
        <div className="Whole">
            <div className="container2">
                <div className="title">Faculty Edited</div>
                <form >
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Faculty Name</span>
                            <input type="text" value={data.FacultyName} required onChange={(e)=>{
                                setData({...data,FacultyName:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Image</span>
                            <input type="text" value={data.FacultyImage} required onChange={(e)=>{
                                setData({...data,FacultyImage:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Email</span>
                            <input type="text" value={data.FacultyEmail} required onChange={(e)=>{
                                setData({...data,FacultyEmail:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Department</span>
                            <input type="text" value={data.FacultyDepartment} required onChange={(e)=>{
                                setData({...data,FacultyDepartment:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Salary</span>
                            <input type="text" value={data.FacultySalary} required onChange={(e)=>{
                                setData({...data,FacultySalary:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Mobile Number</span>
                            <input type="text" value={data.FacultyMobileNo} required onChange={(e)=>{
                                setData({...data,FacultyMobileNo:e.target.value});
                            }}></input>
                        </div>
                        <div className="button1">
                        <input type="button" value="Save" onClick={()=>{
                            fetch(apiUrl+"/"+param.id,{
                            method:"PUT",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                            })
                            .then(
                            navigate('/Faculty')
                            )
                            }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}