import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors  from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.routes.js"
import generalRoutes from "./routes/general.routes.js"
import managementRoutes from "./routes/management.routes.js"
import salesRoutes from "./routes/sales.routes.js"

//data imports
import User from "./models/user.model.js"
import { dataUser} from "./data/index.js"

//Configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())

//Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))


    //User.insertMany(dataUser)
}).catch((error) => console.log(`${error} did not connect`))

