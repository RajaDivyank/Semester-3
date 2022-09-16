import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPrinter(){
    const navigate = useNavigate();
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Printers";
    
    const [data, setData] = useState({});
    return(
        <>
            <div className="Whole">
            <div className="container2">
                <div className="title">Printer</div>
                <form action="/">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Printer Name</span>
                            <input type="text" placeholder="Enter your name" required onChange={(e)=>{
                                setData({...data,PrinterName:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Image</span>
                            <input type="text" placeholder="Image"  onChange={(e)=>{
                                setData({...data,PrinterImage:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Model</span>
                            <input type="text" placeholder="Model" required onChange={(e)=>{
                                setData({...data,PrinterModel:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Maker</span>
                            <input type="text" placeholder="Printer Maker" required onChange={(e)=>{
                                setData({...data,PrinterMaker:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Price</span>
                            <input type="text" placeholder="Price" required onChange={(e)=>{
                                setData({...data,PrinterPrice:e.target.value});
                            }}></input>
                        </div>
                        <div className="input-box">
                            <span className="details">Printer Description</span>
                            <input type="text" placeholder="Description" required onChange={(e)=>{
                                setData({...data,PrinterDescription:e.target.value});
                            }}></input>
                        </div>
                        <div className="button1">
                        <input type="button" value="Add Printer"  onClick={()=>{
                            fetch(apiUrl,{method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                            "Content-Type":"application/json"
                            }
                            })
                            .then((res)=>{
                            navigate('/Printer');
                            })
                        }} ></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}