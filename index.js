let express = require('express');
let app = express();

app.get("/", function(request, response){
    response.send("<h2>Hello world</h2>")
})
app.listen(3000);