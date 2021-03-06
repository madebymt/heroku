const express = require("express")
const app = express()
const mustache = require("mustache-express")
const data = require("./data")
const path = ("path")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))


app.get("/", function(request, response){
    // const title = ("hello")
  response.render('index', {
     data:data.users
  })
})
// get the value from data user.id
app.get("/users/:id", function (request, response) {
const robot = parseInt(request.params.id)
// const robot = parseInt(request.params.id)
let usersinfo = false;
for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].id === robot){
    users = data.users[i]
    }
}
// pull the file from user
response.render ("users", {
    users: users
})
})

const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
// app.listen(process.env.PORT)
// function(){
// console.log("Express started on port 3000")
// })
