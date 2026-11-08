import React, { useState } from 'react';

function CourseForThisSemester() {
    const [courses, setCourses] = useState([
        {
            code: "CS101",
            name: "Introduction to Computer Science",
            instructor: "Dr. Smith",
            credits: 3,
        }, 
        {
            code: "CS102",
            name: "Data Structures and Algorithms",
            instructor: "Prof. Johnson",
            credits: 4,
        }
    ]);

    return (
        <div>
            <h2>Courses This Semester</h2>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.instructor}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseForThisSemester;