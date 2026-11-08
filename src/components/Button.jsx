import React, { useState } from 'react'

export default function Button({ books }) {

    const [count, setCount] = useState(0);

    function increment(){
         setCount(count + 1);
    }

    const totalPrice = books.reduce((total, book) => {
        const priceAsNumber = parseFloat(book.price.replace('$', ''));
        return total + priceAsNumber;
    }, 0);

    const showAmount = () => {
        alert(`The total price of all books is $${totalPrice.toFixed(2)}`);
    }

  return (
    <div>
         {}
         <button onClick={increment}>click Me {count}</button>
         
         {}
         <button onClick={showAmount}>Amount</button>
    </div>
  )
}