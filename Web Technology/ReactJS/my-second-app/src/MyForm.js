import { useState } from "react";

export default function MyForm(){
    const [FacultyName , setFacultyName] = useState("");
    const [Branch,setBranch] = useState("");
    return(<>
        <form>
            <table>
                <tr>
                    <td>Full Name </td>
                    <td>:</td>
                    <td><input type="text" onChange={(e)=>{
                        setFacultyName(e.target.value);
                    }} /></td>
                </tr>
                <tr>
                    <td>Branch </td>
                    <td>:</td>
                    <td><input type="text" onChange={(e)=>{
                        setBranch(e.target.value);
                    }} /></td>
                </tr>
            </table>
        </form>
        <h1> {FacultyName} </h1>
        <h1> {Branch} </h1>
    </>);
}