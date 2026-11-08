import React from 'react'
import Button from './Button'

function HomePage() {

    const book = "Full Stack web Technology";
    const gender = 'F';

    const books = [
        {   
            code: "Web001",
            name: "Full stack web technology",
            author: "Shema",
            price: "$45.00",
            cv: "A comprehensive guide covering frontend and backend development using modern frameworks."
        },
        {
            code: "SOD001",
            name: "Mastering Software engineering",
            author: "Ines",
            price: "$55.50",
            cv: "Learn the principles of writing clean, scalable, and maintainable code for large applications."
        }
    ]
    
  return (
    <div>
        <div><h2>This is the home page</h2></div>
        <div><p>These are the available books :<br/></p></div>
        
        <div>{
          gender === 'F' ? <div>hello Girl</div> :<div>hello Boy</div> 
        }</div>

        <div>
            <ol>
                {books.map(bookItem => (
                    <li key={bookItem.code} style={{ marginBottom: "15px" }}>
                        <strong>{bookItem.name}</strong> <br/>
                        <span>Author: {bookItem.author}</span> <br/>
                        <span>Price: {bookItem.price}</span> <br/>
                        <span>Description (CV): {bookItem.cv}</span>
                    </li>
                ))} 
            </ol>
        </div>

        {}
        <Button books={books} /> 

    </div>
  )
}

export default HomePage