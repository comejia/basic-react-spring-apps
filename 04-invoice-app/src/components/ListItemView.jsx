import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types'

export const ListItemView = ({ title, items, handler }) => {
    return (
        <>
            <h4>{ title }</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(({ id, product, price, quantity }) => (
                            <RowItemView 
                                key={id}
                                id={id}
                                product={product}
                                price={price}
                                quantity={quantity}
                                handler={handler}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

ListItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}