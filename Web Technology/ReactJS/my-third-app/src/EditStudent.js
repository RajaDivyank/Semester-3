import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent(){
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Student";

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id,{method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
      },[]);

     const [data,setData] = useState({}); 
    return(
        <div className="Whole">
            <div className="container2">
                <div className="title">Student Edited</div>
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
                            <span className="details">Student EnrollmentNO</span>
                            <input type="text" placeholder="Department" required onChange={(e)=>{
                                setData({...data,StudentEnrollmentNo:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Branch</span>
                            <input type="text" placeholder="Salary" required onChange={(e)=>{
                                setData({...data,StudentBranch:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Student Mobile Number</span>
                            <input type="text" placeholder="Mobile Number" required onChange={(e)=>{
                                setData({...data,StudentMobileNo:e.target.value});
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
                            .then((res)=>{
                            navigate('/Student');
                            })
                            }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        // <div className="container text-center">
        // <div className="row m-4 input-group">
        //     <span className="input-group-text col-2">Student Name</span>
        //     <input className="form-control col" type="text" onChange={(e)=>{
        //         setData({...data,StudentName:e.target.value});
        //     }} />
        // </div>
        // <div className="input-group row m-4">
        //     <span className="input-group-text col-2">Student Image</span>
        //     <input type="text" className="form-control col" onChange={(e)=>{
        //         setData({...data,StudentImage:e.target.value})
        //     }}/>
        // </div>
        // <div className="input-group row m-4">
        //     <span className="input-group-text col-2">Student Branch</span>
        //     <input type="text" className="form-control col" onChange={(e)=>{
        //         setData({...data,StudentBranch:e.target.value})
        //     }}/>
        // </div>
        // <div className="input-group row m-4">
        //     <label for="exampleFormControlInput1" className="form-label col-2 input-group-text">Student Email</label>
        //     <input type="email" className="form-control col" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=>{
        //         setData({...data,StudentEmail:e.target.value})
        //     }}/>
        // </div>
        //  <select className="form-select row m-4" aria-label="Default select example" onChange={(e)=>{
        //     setData({...data,Gender:e.target.value})
        //  }}>
        //     <option selected>Gender</option>
        //     <option value="1">Male</option>
        //     <option value="2">Female</option>
        // </select>

        // <input type="button" value="Edit Student" onClick={()=>{
        //     fetch(apiUrl+"/"+param.id,{
        //     method:"PUT",
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