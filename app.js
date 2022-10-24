const express = require('express')
const dotevn = require('dotenv')
const db = require('./server/database/connection')
const app = express();
const adminRouter = require('./server/routes/adminRouter')
const userRouter = require('./server/routes/userRouter')
const sessions = require('express-session');


app.use(express.static('public'))

dotevn.config({path: "config.env"})
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


// session
app.use(sessions({
    secret: 'verygoodpassword',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 600000
    }
}))


app.use(function (req, res, next) {
    res.set('cache-control', 'no-cache , no-store,must-revalidate,max-stale=0,post-check=0,pre-checked=0');
    next();
});

db.connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`listening to port ${PORT}`)
        })
    }

})

app.listen(4000, () => {
    console.log("Connected to sever " + PORT)
});

app.use(userRouter)
app.use(adminRouter)

app.use(function (req, res) {
    res.status(404).render('user/404.ejs');
});
