const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());


app.get("/", function (req, res) {
  res.send("SMILE! :D");
});


app.post("/ResetPassword", function (req, res) {
  res.send("Password received");
})


app.listen(port, function () {
  console.log(`SkillSwap server listening on port ${port}`);
});

