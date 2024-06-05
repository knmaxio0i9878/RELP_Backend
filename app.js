const express = require("express");
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
app.use(express.json())
const PORT = 3001

mongoose.connect("mongodb://127.0.0.1/RealEstate").then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log("server started");
})


app.use(cors())

const flatRoutes = require('./src/routes/FlatRoutes')
const userRoutes = require('./src/routes/UserRoutes')
const societyRoutes = require('./src/routes/SocietyRoutes')
const shopRoutes = require('./src/routes/ShopRoutes')
const plotRoutes = require('./src/routes/PlotRoutes')
const amenitiesRoutes = require('./src/routes/AmenitiesRoutes')
const bunglowRoutes = require('./src/routes/BunglowRoutes')
const countryRoutes = require('./src/routes/CountryRoutes')
const stateRoutes = require('./src/routes/StateRoutes')
const cityRoutes = require('./src/routes/CItyRoutes')
const areaRoutes = require('./src/routes/AreaRoutes')
const pincodeRoutes = require('./src/routes/PincodeRoutes')
const todoRoutes = require('./src/routes/ToDoRoutes')
app.use('/flat',flatRoutes)
app.use('/user',userRoutes)
app.use('/society',societyRoutes);
app.use('/shop',shopRoutes)
app.use('/plot',plotRoutes)
app.use('/amenities',amenitiesRoutes);
app.use('/bunglow',bunglowRoutes)
app.use('/country',countryRoutes)
app.use('/state',stateRoutes)
app.use('/city',cityRoutes)
app.use('/area',areaRoutes)
app.use("/pincode", pincodeRoutes)
app.use("/list",todoRoutes)
