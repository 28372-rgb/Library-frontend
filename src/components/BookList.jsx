import React, { useState } from 'react';

function BookList() {
    const [books, setBooks] = useState([
        {
            code: "Web001",
            name: "Full stack web technology",
        },
        {
            code: "SOD001",
            name: "Mastering Software engineering",
        }
    ]);

    return (
        <div>
            <h2>Book List</h2>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Book Name</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.code}>
                            <td>{book.code}</td>
                            <td>{book.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;