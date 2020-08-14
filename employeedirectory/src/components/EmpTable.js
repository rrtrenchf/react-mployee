import React from "react"
import seachrForm from "./searchForm"


function EmpTable(props) {
    console.log({ props })
    const findEmp = props.Emp?.filter(employee => employee.name.first.toLowerCase().includes(props.search.toLowerCase()) || employee.name.last.toLowerCase().includes(props.search.toLowerCase()));
    return (
        <table>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>


            </tr>
            {findEmp?.map(employee => (
                <tr key={employee.id}>
                    <td><img src={employee.picture.thumbnail} /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.dob.age}</td>

                </tr>
            ))}
        </table>
    )
}


export default EmpTable 