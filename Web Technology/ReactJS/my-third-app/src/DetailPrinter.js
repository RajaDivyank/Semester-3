import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailPrinter(){
    const navigate = useNavigate();
    const param = useParams();
  
    const apiUrl = "https://6311884019eb631f9d740d9b.mockapi.io/Printers";
  
    const [data,setData] = useState({});
  
    useEffect(()=>{
      fetch(apiUrl+"/"+param.id,{method:"GET"})
      .then(res=>res.json())
      .then(res=>setData(res));
    },[]);
    return(
        <>
            <div className="container1">
            <div className="profile-box">
                <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-menu-vector-icon-png-image_3791388.jpg" className="menu-icon" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfWypuFF6cVZCPSFhlTQcjouyhwK2olyPQg&usqp=CAU" className="setting-icon" />
                <img src={data.PrinterImage} className="profile-pic" />
                <h3>{data.PrinterName}</h3>
                <div className="social-media">
                  <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHw%3D&w=1000&q=80" />
                  <img src="https://i.pinimg.com/236x/b7/91/26/b79126d537c628d7ac5429f7f84ffc8e--twitter-logo-twitter-icon.jpg" />
                  <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" />
                </div>
                <button type="button"> Follow</button>
                <div className="profile-bottom">
                      <div className="data">Maker : {data.PrinterMaker}</div>
                      <div className="data">Model : {data.PrinterModel}</div>
                      <div className="data">Price : {data.PrinterPrice} </div>
                      <div className="data">Description : {data.PrinterDescription}</div>
                      <div className="row">
                      <div className="btn btn-primary col  hello"  onClick={()=>{
                          fetch(apiUrl+"/"+param.id,{method:"DELETE"})
                          .then((res)=>{
                          navigate('/Printer');
                          });
                          }}>DELETE</div> 
                          <div className="btn btn-primary col  hello" onClick={()=>{ 
                          navigate('../Printer/edit/'+param.id); 
                          }}>Edit 
                          </div>
                      </div>
                </div>
            </div>
          </div>
        </>
    );
}