require('dotenv').config()


const express = require("express");
const connectedDB = require('./config/db');

const cors = require("cors");
const authRouter = require('./routes/authRoutes');
const adminRouter =  require('./routes/adminRoute');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");

// tackles cors
const corsOptions = {
    origin: "http://localhost:5174",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectedDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
      });
});