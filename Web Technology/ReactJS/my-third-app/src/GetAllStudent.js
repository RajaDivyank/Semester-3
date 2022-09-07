import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetAllStudent(){
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Student";
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);

    const fire = data && data.map((stu)=>{
        return(
            <>
                <div className="card col-4 m-4" style={{
                    width:"18rem"
                }}> 
                    <img src={stu.StudentImage} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title ">
                        <div>{stu.StudentName}</div>
                      </h5>
                      <p className="card-text ">
                            <div>Branch : {stu.StudentBranch}</div>
                            <div>Email : {stu.StudentEmail}</div>
                            <div>Mobile : {stu.StudentMobile}</div>
                      </p>
                      <div className="btn btn-primary" onClick={()=>{
                        navigate('/Student/'+stu.id);
                        }}>Detail</div>
                    </div>
                </div>
            </>
        );
    })
    return(
        <>
            <div className="row">
                {fire}
            </div>
            
        </>
    );
}