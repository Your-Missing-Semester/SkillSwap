const express = require('express');
const app = express();
const port = 8000;


app.get("/", function (req, res) {
  res.send("SMILE! :D");
});
  


app.listen(port, function () {
  console.log(`SkillSwap server listening on port ${port}`);
});

