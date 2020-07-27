 const express = require('express');
 const {graphqlHTTP} = require('express-graphql');
const app = express();
const schema = require("./schema/schema")
const cors=require ('cors')

const mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/Taskers';
mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology:true,useCreateIndex:true});
  
//allowacross origin requests
app.use(cors());
 
//   const me = new User({
//       name:'mGoodluck',
//       age:921
//   })192.168.99.100

//   me.save().then((result) => {
//       console.log(result)
//   }).catch((err) => {
//       console.log('dead end')
//   });
const port = process.env.PORT || 5000;
app.use('/graphql', graphqlHTTP({
schema:schema,
graphiql:true
}));
app.listen(port, () => console.log (`Server running on port ${port} 🔥`));