import React from 'react';
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    // const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    function toPayment(){
      navigate('/payment');
    }
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
  
        <button onClick ={toPayment} >Proceed to Checkout</button>
      </div>
    );
  }
  


export default Subtotal