import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import reqDataSlice, {reqDataActions} from "../store/reqDataSlice";

const ProcurementForm = (props) => {
    const subTotal = useSelector(state => state.reqData.subTotal)
    const items = useSelector(state => state.reqData.reqItems)

    const dispatch = useDispatch()
    console.log('ProcurementForm ran')
    const [itemDetail, setItemDetail] = useState({
        id: props.id,
        name: '',
        quantity: 0,
        price: 0,
        total: 0,
    })

    function itemUpdateHandler(e) {
        console.log('itemUpdateHandler ran')

        setItemDetail(prevState => (
            {
                ...prevState,
                [e.target.id]: e.target.value,

            }
        ))
    }

    console.log(itemDetail.quantity)
    console.log(itemDetail.price)
    console.log(itemDetail.quantity * itemDetail.price)
    useEffect(() => {
        setItemDetail(
            prevState => (
                {
                    ...prevState,
                    total: itemDetail.quantity * itemDetail.price
                }
            )
        )
    }, [itemDetail.quantity, itemDetail.price])

    useEffect(() => {
        dispatch(reqDataActions.subTotal(itemDetail.total))
    }, [dispatch, itemDetail])

    useEffect(() => {
        dispatch(reqDataActions.addItem(itemDetail))
    }, [dispatch, itemDetail])

    console.log('Subtotal for the entire procurement is')
    console.log(subTotal)
    console.log(items)
    return (
        <div>

            <TextField sx={{width: '30ch'}} onChange={itemUpdateHandler} type='text' id="name"
                       label="Item Name"
                       variant="outlined"/>
            <TextField sx={{width: '15ch'}} onChange={itemUpdateHandler} type='number' id="quantity"
                       label="Item Quantity"
                       variant="outlined"/>
            <TextField sx={{width: '15ch'}} onChange={itemUpdateHandler} type='number' id="price"
                       label="Item Price"
                       variant="outlined"/>
            <TextField disabled={true} type='number' id="total" label={itemDetail.total}
                       variant="outlined" sx={{width: '15ch'}}/>
        </div>
    )
}

export default ProcurementForm