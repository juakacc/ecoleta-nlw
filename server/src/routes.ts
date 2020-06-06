import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const app = express();
const pointsController = new PointsController();
const itemsController = new ItemsController();

app.get("/items", itemsController.index);

app.post("/points", pointsController.create);
app.get("/points/:id", pointsController.show);
app.get("/points", pointsController.index);

export default app;
