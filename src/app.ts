import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

// parsers

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Car Wash Backend"
  });
});





export default app;
