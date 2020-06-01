import OrderController from "../controller/orderController";

export default (server) =>{

    // add order
    server.post("/order", OrderController.insert);
    server.get("/order", OrderController.getAll);
    server.get("/order/date", OrderController.updatePaymentDate)
    
    server.get("/order/:id", OrderController.getStaff);
    server.put("/order/:id", OrderController.update);
    server.delete("/order/:id", OrderController.delete);

}