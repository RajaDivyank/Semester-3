import { LinkContainer } from "react-router-bootstrap";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "#C2CAD0",
          textAlign: "center",
        }}
      >
        My First React Web Page
      </h1>
      <div
        style={{
          height: "50px",
          border: "2px solid black",
          backgroundColor: "#EE4C7C",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            width: "30%",
            float: "left",
            margin: "15px",
            // height:"70vh",
            textAlign: "center",
            backgroundColor: "#66FCF1",
          }}
        >
          <Link to="/">Home</Link>
        </div>

        <div
          style={{
            border: "2px solid black",
            width: "30%",
            float: "left",
            margin: "15px",
            textAlign: "center",
            backgroundColor: "#66FCF1",
          }}
        >
          <LinkContainer to="/Student">
            <div>Student</div>
          </LinkContainer>
        </div>

        <div
          style={{
            border: "2px solid black",
            width: "30%",
            float: "left",
            margin: "15px",
            // height:"70vh",
            textAlign: "center",
            backgroundColor: "#66FCF1",
          }}
        >
          <Link to="/Product">Product</Link>
        </div>
      </div>

      <div
        style={{
          border: "2px solid black",
          width: "100%",
          height: "window.innerHeight",
          float: "left",
          backgroundColor: "#2F2FA2",
          marginTop: "20px",
        }}
      >
        <Outlet />
      </div>

      <div>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "yellow",
            float: "left",
            width: "100%",
          }}
        >
          don't &copy; Content
        </h1>
      </div>
    </>
  );
}
