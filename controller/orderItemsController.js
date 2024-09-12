import {getOrderItemsDb, getOrderItemDb, placeOrderItemDb, deleteOrderItemDb, updateOrderItemDb} from '../model/orderItemsDB.js'

const fetchOrderItems = async(req,res) =>{
    res.json(await getOrderItemsDb())
}

const fetchOrderItem = async(req,res)=>{
    res.json(await getOrderItemDb(req.params.id))
}

const placeOrderItem = async (req, res) => {
    try {
        let { orderId, stockId, quantity, price, priceTotal } = req.body;
        await placeOrderItemDb(orderId, stockId, quantity, price, priceTotal);

        res.status(200).send('OrderItem was added successfully');
    } catch (error) {
        res.status(404).send('An error occurred while adding the orderItem');
    }
};

const deleteOrderItem = async (req, res) => {
    try {
        await deleteOrderItemDb(req.params.id);
        res.status(200).send('OrderItem was deleted successfully');
    } catch (error) {
        res.status(404).send('An error occurred while trying to delete a orderItem');
    }
};

const updateOrderItem = async (req, res) => {
    try {
        let { quantity, priceTotal } = req.body;
        let orderItem = await getOrderItemDb(req.params.id);

        quantity?quantity=quantity:quantity = orderItem.quantity
        priceTotal?priceTotal=priceTotal:priceTotal = orderItem.priceTotal

        await updateOrderItemDb(quantity, priceTotal, req.params.id);
        res.status(200).send('OrderItem was updated successfully');

    } catch (error) {
        res.status(404).send('An error occurred while updating the orderItem');
    }
};

export{fetchOrderItems,fetchOrderItem,placeOrderItem,deleteOrderItem,updateOrderItem}