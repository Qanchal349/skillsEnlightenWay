import express from "express"
const app = express();
import cookieParser from "cookie-parser";
import courseRoute from "./routes/courseRoute.js";
import { ErrorMiddleware } from "./middleware/Error.js";
import userRoute from "./routes/userRoute.js"
import paymentRoute from "./routes/paymentRoute.js"
import otherRoute from "./routes/otherRoute.js"
import cors from "cors"

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors());

app.use("/api/v1",courseRoute)
app.use("/api/v1",userRoute)
app.use("/api/v1",paymentRoute) 
app.use('/api/v1',otherRoute)


// error middleware 
app.use(ErrorMiddleware)

export default app;