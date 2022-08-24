export const initialState = {
    basket : [],
    user: null,
    productName:null,
    service : null
};

export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state,action) =>{
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket : [...state.basket,action.item]
            };
        case 'EMPTY_BASKET':
            return {
            ...state,
            basket: []
            }
        case 'REMOVE_FROM_BASKET':
                const index=state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );

                let newBasket=state.basket;

                if(index>=0){
                    newBasket.splice(index,1);
                }else{
                    console.warn("No item");
                }

                return{
                    ...state,
                    basket : newBasket                
                }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'ADD_OR_EDIT_PRODUCT_IN_DB':
            return {
                ...state,
                productName:action.productName
            }
        case 'REGISTERED_USER' :
            return{
                ...state,
                service : action.email
            }   
        default:
        return state;
    }
};

export default reducer;