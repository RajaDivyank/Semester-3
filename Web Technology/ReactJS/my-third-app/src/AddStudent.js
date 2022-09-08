import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent(){
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Student";
    
    const [data, setData] = useState({});
    return(
        <div className="Whole">
            <div className="container2">
                <div className="title">Student Registration</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Student Name</span>
                            <input type="text" placeholder="Enter your name" required onChange={(e)=>{
                                setData({...data,StudentName:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Image</span>
                            <input type="text" placeholder="Image" required onChange={(e)=>{
                                setData({...data,StudentImage:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Email</span>
                            <input type="text" placeholder="Email" required onChange={(e)=>{
                                setData({...data,StudentEmail:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Enrollment Number</span>
                            <input type="text" placeholder="EnrollmentNO" required onChange={(e)=>{
                                setData({...data,StudentEnrollmentNO:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Branch</span>
                            <input type="text" placeholder="Branch" required onChange={(e)=>{
                                setData({...data,StudentBranch:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Mobile Number</span>
                            <input type="text" placeholder="Mobile Number" required onChange={(e)=>{
                                setData({...data,StudentMobile:e.target.value});
                            }}></input>
                        </div>
                        <div className="button1">
                        <input type="submit" value="Add Student"  onClick={()=>{
                            fetch(apiUrl,{method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                            "Content-Type":"application/json"
                            }
                            })
                            .then((res)=>{
                            navigate('/Student');
                            })
                        }} ></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        // <div className="container text-center">
        //     <div className="row m-4 input-group">
        //         <span className="input-group-text col-2">Student Name</span>
        //         <input className="form-control col" type="text" onChange={(e)=>{
        //             setData({...data,StudentName:e.target.value});
        //         }} />
        //     </div>
        //     <div className="input-group row m-4">
        //         <span className="input-group-text col-2">Student Image</span>
        //         <input type="text" className="form-control col" onChange={(e)=>{
        //             setData({...data,StudentImage:e.target.value})
        //         }}/>
        //     </div>
        //     <div className="input-group row m-4">
        //         <span className="input-group-text col-2">Student Branch</span>
        //         <input type="text" className="form-control col" onChange={(e)=>{
        //             setData({...data,StudentBranch:e.target.value})
        //         }}/>
        //     </div>
        //     <div className="input-group row m-4">
        //         <label for="exampleFormControlInput1" className="form-label col-2 input-group-text">Student Email</label>
        //         <input type="email" className="form-control col" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{
        //             setData({...data,StudentEmail:e.target.value})
        //         }}/>
        //     </div>
        //     <div className="input-group row m-4">
        //         <span className="input-group-text col-2">Student Mobile</span>
        //         <input type="text" className="form-control col" onChange={(e)=>{
        //             setData({...data,StudentMobile:e.target.value})
        //         }}/>
        //     </div>
             

        //     <input type="button" value="Add Student" onClick={()=>{
        //     fetch(apiUrl,{
        //     method:"POST",
        //     body:JSON.stringify(data),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        //     })
        //     .then((res)=>{
        //     navigate('/Student');
        //     })
        //     }} />
        // </div>
    );
}