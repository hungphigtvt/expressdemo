const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
consti Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
},{
   collection:'acount'
})