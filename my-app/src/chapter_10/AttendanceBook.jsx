import React from "react";

const students = [
    {
        name: "One",
    },
    {
        name: "Two",
    },
    {
        name: "Three",
    },
    {
        name: "Four",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;