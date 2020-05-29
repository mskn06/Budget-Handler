import OrderController from "../controller/orderController";

export default (server) =>{

    server.get("/order", OrderController.getAll);
    server.post("/order", OrderController.insert);
    server.put("/order/:id", OrderController.update);
    server.delete("/order/:id", OrderController.delete);
}