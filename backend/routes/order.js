import OrderController from "../controller/orderController";

export default (server) =>{

    // add order
    server.post("/order", OrderController.insert);


    server.get("/order", OrderController.getAll);
    server.put("/order/:id", OrderController.update);
    server.delete("/order/:id", OrderController.delete);

    server.get("/order/date", OrderController.updatePaymentDate)
}