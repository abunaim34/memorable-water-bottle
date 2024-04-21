
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottole.json')
          .then(res => res.json())
          .then(data => setBottles(data))
    },[])

    // load cart from local storage
    useEffect(() =>{
        if(bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles)
            const saveCart = []
            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart)
            setCart(saveCart)
        }
    }, [bottles])

    const handleTocart = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromLS(id)
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleTocart={handleTocart}></Bottle>)
                }
            </div>
        </div>
    );
};



export default Bottles;