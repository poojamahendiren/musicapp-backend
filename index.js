require("dotenv").config();    
const express = require("express");   

const db = require("./db/connect");                                           
const cors = require('cors');



const app = express(); 

db(); 


app.get('/', (req, res) => {
    res.send('Welcome to my app!');
})


//middleware to convert incoming data into json format
app.use(cors());
app.use(express.json());

// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Artist links
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

// Album links
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);

const PORT = process.env.PORT || 4000;



app.listen(PORT,()=>{                                                              
    console.log(`App is running on port ${PORT}`);
})