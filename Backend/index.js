const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const  bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const JWTModel = require('./Module/Scheema');
const  signup = require('./controller/signup');

const  Login = require('./controller/Login');
const auth =  require("./controller/Auth");
const Logout = require('./controller/Logout');
const changePassword = require('./controller/ChangePassword');


const app = express();
app.use(express.json());
const port =  process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors({credentials: true,
  origin: 'https://jwt-frontend-26n8.onrender.com'

}));
app.use(cookieParser());
  //  mongodb connection
  mongoose.connect('mongodb+srv://gabbarbhaiya:Shubham123@gabbarbhaiya.2lvenhx.mongodb.net/Login',{

  useNewUrlParser: true,
  useUnifiedTopology: true,
  },)
  .then(()=>{console.log('connect')})
  .catch((err)=>{console.log(err)}) ;


  app.get("/",(req,res) =>{
    res.setHeader("Access-Control-Allow-Credentials","true");
      res.send("api is running");
    
    });
app.use('/register', signup);
app.use('/login', Login);
app.use('/display', auth);
app.use('/logout', Logout);




  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
