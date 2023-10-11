import { useState } from "react"

export const FormView = ({ handler }) => {

    const [formItemState, setFormItemState] = useState({
        product: '',
        price: '',
        quantity: ''
    })

    const { product, price, quantity } = formItemState

    const onInputChange = ({ target: { name, value } }) => {
        setFormItemState({
            ...formItemState,
            [name]: value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        if(product.trim().length <= 1) return;
        if(price.trim().length < 1 || isNaN(price.trim())) return;
        if(quantity.trim().length < 1 || isNaN(quantity.trim())) return;

        handler(formItemState)

        setFormItemState({
            product: '',
            price: '',
            quantity: ''
        })
    }

    return (
        <>
            <form action="" className="w-50" onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={ onInputChange }
                />
                <input
                    type="text"
                    name="price"
                    value={ price }
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={ onInputChange }
                />
                <input type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={ onInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary m-3">
                    Nuevo Item
                </button>
            </form>
        </>
    )
}