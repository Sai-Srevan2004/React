import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const data = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = data.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
    console.log("Cart updated");
  }, [data]);

  return (
    <div>
      {data.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <div className="cart-items">
            {data.map((dt) => {
              return (
                <div key={dt.id}>
                  <div className="img">
                    <img src={dt.image} alt={dt.description} />
                  </div>
                  <div className="desc-cart">
                    <p>{dt.description}</p>
                    <p>{dt.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary">
            <h1>Summary</h1>
            <p>Total Amount: {total}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
