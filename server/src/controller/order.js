import Query from "../model/Query";

async function createOrder(req, res) {
    try {
        console.log(req.body);
        const queryOrder = "INSERT INTO order (ref_order, total_amount, order_date, user_id) VALUES (?, ?, NOW(), ?)";
        await Query.queryByObject(queryOrder, req.body);

        // récupérer l'ID de cette commande-ci du tableau 'order'
        const queryLastBooking = "SELECT id FROM order WHERE user_id = ? ORDER BY order_date DESC LIMIT 1";
        const [orderId] = await Query.queryByValue(queryLastBooking, req.body.userID);


    } catch (err) {
        throw Error(err);
    }
}

export { createOrder };