import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetAllPrinter(){
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Printers";
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);

    const fire = data && data.map((pro)=>{
        return(
            <div className="box">
                <span></span>
                <div className="content">
                <img src={pro.PrinterImage} className="card-img-top" />
                <h2>{pro.PrinterName}</h2>
                <div className="btn btn-primary" onClick={()=>{
                    navigate("/Printer/"+pro.id);
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