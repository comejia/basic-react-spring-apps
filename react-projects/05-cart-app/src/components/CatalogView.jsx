import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import { ProductCardView } from "./ProductCardView"

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const findAll = async() => {
        const prods = await getProducts()
        setProducts(prods)
        setIsLoading(false)
    }

    useEffect(() => {
        findAll()
    }, [])

    return (
        <>
            {
                isLoading && <div className="alert alert-info">Cargando...</div>
            }
            <div className="row">
                {products.map(({id, name, description, price}) => (
                    <div className="col-4 my-2" key={id}>
                        <ProductCardView
                            id={id}
                            name={name}
                            description={description}
                            price={price}
                            handler={handler}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}