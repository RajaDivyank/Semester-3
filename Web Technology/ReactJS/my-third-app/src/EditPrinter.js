import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPrinter(){
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Printers";
    const [data,setData] = useState({}); 

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id)
        .then(res=>res.json())
        .then(res=>setData(res))
      },[]);


    return(
        <div className="Whole">
            <div className="container2">
                <div className="title">Printer Edited</div>
                <form >
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">printer Name</span>
                            <input type="text" value={data.PrinterName} required onChange={(e)=>{
                                setData({...data,PrinterName:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Image</span>
                            <input type="text" value={data.PrinterImage} required onChange={(e)=>{
                                setData({...data,PrinterImage:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Model</span>
                            <input type="text" value={data.PrinterModel} required onChange={(e)=>{
                                setData({...data,PrinterModel:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Maker</span>
                            <input type="text" value={data.PrinterMaker} required onChange={(e)=>{
                                setData({...data,PrinterMaker:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Description</span>
                            <input type="text" value={data.PrinterDescription} required onChange={(e)=>{
                                setData({...data,PrinterDescription:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Price</span>
                            <input type="text" value={data.PrinterPrice} required onChange={(e)=>{
                                setData({...data,PrinterPrice:e.target.value});
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
                            navigate('/Printer')
                            )
                            }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}