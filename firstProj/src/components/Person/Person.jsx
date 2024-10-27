import React from 'react';

// const validPassword = () => <h1>Valid Password</h1>
// const invalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//     return isValid ? validPassword() : invalidPassword();
        
// }

const Cart = () =>{
    const items = ['Wireless Mouse','Wireless Keyboard','Wireless Headphones'];
    return (
        <div>
            <h1>Cart</h1>
            {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}

            <ul>
                <h4>Products</h4>
                {
                    items.map((item) => {
                        return <li key={item}> {item} </li>
                    })
                }
            </ul>
        </div>
    )
}

function Person({name,Age}){
    
    return(
        <div>
          <Cart />


        </div>
    )
}

export default Person;  