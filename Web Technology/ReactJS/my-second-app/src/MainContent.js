import { Link } from "react-router-dom";

export default function MainContent(){
    return(<>
        <div className="container text-center">
            <div className="row">
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img #e472"/>
                    <div className="card-body"><Link to="/">AcademicCalculator</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/TimeTable">TimeTable</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Attendance">Attendance</Link></div>
                </div>
            </div>
            <div className="row">
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/LMS">LMS</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Feedback">Feedback</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Fees">Fees</Link></div>
                </div>
            </div>
            <div className="row">
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Transport">Transport</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Notification">Notification</Link></div>
                </div>
                <div className="card col m-3" style={{width: "12rem"}}>
                    <div className="card-img fa-solid fa-calendar-lines-pen"/>
                    <div className="card-body"><Link to="/Result">Result</Link></div> 
                </div>
            </div>
        </div>
    </>);
}