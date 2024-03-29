import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFaculty(){
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Faculty";
    
    const [data, setData] = useState({});
    return(
        <div className="Whole">
            <div className="container2">
                <div className="title">Faculty Registration</div>
                <form >
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Faculty Name</span>
                            <input type="text" placeholder="Enter your name" required onChange={(e)=>{
                                setData({...data,FacultyName:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Image</span>
                            <input type="text" placeholder="Image" required onChange={(e)=>{
                                setData({...data,FacultyImage:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Email</span>
                            <input type="text" placeholder="Email" required onChange={(e)=>{
                                setData({...data,FacultyEmail:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Department</span>
                            <input type="text" placeholder="Department" required onChange={(e)=>{
                                setData({...data,FacultyDepartment:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Salary</span>
                            <input type="text" placeholder="Salary" required onChange={(e)=>{
                                setData({...data,FacultySalary:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Faculty Mobile Number</span>
                            <input type="text" placeholder="Mobile Number" required onChange={(e)=>{
                                setData({...data,FacultyMobileNo:e.target.value});
                            }}></input>
                        </div>
                        <div className="button1">
                        <input type="button" value="Add Faculty"  onClick={()=>{
                            fetch(apiUrl,{method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                            "Content-Type":"application/json"
                            }
                            })
                            .then((res)=>{
                            navigate('/Faculty');
                            })
                        }} ></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}