import ProcurementForm from "./ProcurementForm";
import Stack from '@mui/material/Stack';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Procurement = () => {
    console.log('Procurement ran')
    const subTotal = useSelector(state => state.reqData.subTotal)
    const initialReqItems = [
        {
            id: Math.random(),
            name: '',
            quantity: 0,
            price: 0,
            total: 0
        }
    ]
    const [reqItems, setReqItems] = useState(initialReqItems)

    function addMoreItemHandler() {
        setReqItems(prevItems => (
            [
                ...prevItems, {
                id: Math.random(),
                name: '',
                quantity: 0,
                price: 0,
                total: 0

            }
            ]
        ))
    }

    return (
        <Stack spacing={4} alignItems="center">
            <button type='button' onClick={addMoreItemHandler}>Add more entry</button>
            {reqItems.map(item =>
                <ProcurementForm
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    total={item.total}
                />)
            }
            <h1>{subTotal}</h1>
        </Stack>
    )
}
export default Procurement;