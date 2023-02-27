import express, { Application, NextFunction, Request, Response } from "express";
import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";
import morgan from "morgan";
import { orderRouter } from "./v1/routes/orderRoutes";
import { productRouter } from "./v1/routes/productRoutes";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const uri = `mongodb+srv://ritkock:${process.env.MONGO_ATLAS_PW}@node-rest-shop.s14ztci.mongodb.net/?retryWrites=true&w=majority`;

const mongoClientOptions: MongoClientOptions = {
  serverApi: ServerApiVersion.v1,
};

const client = new MongoClient(uri, mongoClientOptions);

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
    // database and collection code goes here
    const db = client.db("webshop");
    const coll = db.collection("products");
    const cursor = coll.find();
    // await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

client.on("error", (err) => {
  console.error(err);
});

client.db("test").collection("devices");

client.close();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.use("/v1/products", productRouter);
app.use("/v1/orders", orderRouter);

class ApiError extends Error {
  status: number = 500;
}

app.use((req, res, next) => {
  const error = new ApiError("Not Found");
  error.status = 404;
  next(error);
});

app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status);
  res.json({ error: { message: error.message } });
});

export default app;
