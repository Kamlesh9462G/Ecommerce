const mongoose = require('mongoose');
const { options } = require('./app');
const app = require('./app')
let PORT = 8080 || process.env.PORT;
let server;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}).then(() => {
    console.log("mongoDB Connected");
    server = app.listen(PORT, () => {
        console.log(`server listening to port ${PORT}`)
    })
})