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
            <div className="box">
                <span></span>
                <div className="content">
                <img src={stu.StudentImage} className="card-img-top" />
                <h2>{stu.StudentName}</h2>
                <div className="btn btn-primary" onClick={()=>{
                    navigate("/Student/"+stu.id);
                    }}>Detail
                </div>
                </div>
            </div>
        );
    })
    return(
        <>
            <div className="cnt homeBg2">
                <div className="row row-cols-1 row-cols-md-3 g-4 align">
                    {fire}{" "}
                </div>
            </div>
        </>
    );
}