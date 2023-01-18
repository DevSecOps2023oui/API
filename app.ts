import { ControlerData } from "./controller/controllerData";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let controllerData: ControlerData = new ControlerData();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.get("/", (req, res) => res.send("🏠"));
app.get("/all", (req, res) => controllerData.GetAll(req, res));
app.get("/allday", (req, res) => controllerData.GetAllDay(req, res));
app.get("/temp", (req, res) => controllerData.GetTemp(req, res));
app.get("/hydro", (req, res) => controllerData.GetHydro(req, res));
app.get("/vent", (req, res) => controllerData.GetVent(req, res));

app.listen(3001, () => {
  console.log("Serveur listening on port :3001");
});
