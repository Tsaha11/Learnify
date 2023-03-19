import "./Sidebar2.css";
import Chatcontainer from "./Chatcontainer";
import AuthContext from "../store/auth-context";
import { useContext } from "react";
function Doubt() {
  const ctx=useContext(AuthContext);
  return (
    <div className="container_wrapper_wrapper">
      {/* <div className="container_wrapper"> */}
        <div
          className="container"
          style={{
            margin: "auto auto",
            border: "0",
            // marginTop: "15px",
            // marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "2px 7px 29px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          <Chatcontainer></Chatcontainer>
        </div>
      {/* </div> */}
      </div>
  );
}

export default Doubt;
