import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Jisoo",
    },
    {
        id: 3,
        name: "Jiwon",
    },
    {  
        id: 4,
        name: "Soojin",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}> {student.name}
                </li>;
            })}
        </ul>

    )
}

export default AttendanceBook;