import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="nav">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="./" className="item">
          Home
        </Link>{" "}
        &nbsp; &nbsp; &nbsp;&nbsp;
        <Link to="./Student" className="item">
          Student
        </Link>{" "}
        &nbsp; &nbsp; &nbsp;&nbsp;
        <Link to="./Student/add" className="item">
          Add Student
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="./Faculty" className="item">
          Faculty
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="./Faculty/add" className="item">
          Add Faculty
        </Link>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="./Printer" className="item">
          {" "}
          Printer{" "}
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="./Printer/add" className="item">
          {" "}
          Add Printer
        </Link>
      </div>
    </>
  );
}
