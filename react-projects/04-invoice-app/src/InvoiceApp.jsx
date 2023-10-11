import { calculateTotal, getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView"
import { CompanyView } from "./components/CompanyView"
import { InvoiceView } from "./components/InvoiceView"
import { ListItemView } from "./components/ListItemView"
import { TotalView } from "./components/TotalView"
import { FormView } from "./components/FormView"
import { useEffect, useState } from "react"

const invoiceEmpty = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
}

export const InvoiceApp = () => {
    const [activeForm, setActiveForm] = useState(false)

    const [ total, setTotal] = useState(0)

    const [ counter, setCounter ] = useState(4)

    const [ invoice, setInvoice ] = useState(invoiceEmpty)

    const [ items, setItems ] = useState([])

    const { id, name, client, company } = invoice

    useEffect(() => {
        const data = getInvoice()
        console.log(data)
        setInvoice(data)
        setItems(data.items)
    }, [])

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    const handlerAddItem = ({product, price, quantity}) => {
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }])
        
        setCounter(counter + 1)
    }

    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const onActiveForm = () => setActiveForm(!activeForm)

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">Ejemplo Factura</div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name }/>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del cliente" client={ client }/>
                            </div>
                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={ company }/>
                            </div>
                        </div>
                        <ListItemView title="Productos de la factura" items={items} handler={handlerDeleteItem}/>
                        <TotalView total={ total }/>
                        <button 
                            className="btn btn-secondary"
                            onClick={ onActiveForm }>
                            {!activeForm ? 'Agregar Item' : 'Cerrar form'}
                        </button>
                        {!activeForm || <FormView handler={handlerAddItem}/>}
                    </div>
                </div>
            </div>
        </>
    )
}