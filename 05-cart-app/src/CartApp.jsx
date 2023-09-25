import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

const initialCartItem = JSON.parse(sessionStorage.getItem('cart')) || []

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItem)

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find(item => item.product.id === product.id)
        if(hasItem) {
            /*setCartItems([
                ...cartItems.filter(item => item.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1
                }
            ])*/
            setCartItems(
                cartItems.map(item => {
                    if(item.product.id === product.id) {
                        item.quantity = item.quantity + 1
                    }
                    return item
                })
            )
        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1
                }
            ])    
        }
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter(item => item.product.id !== id)
        ])
    }

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handler={handlerAddProductCart}/>

                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handler={handlerDeleteProductCart}/>
                    </div>
                )}
            </div>
        </>
    )
}