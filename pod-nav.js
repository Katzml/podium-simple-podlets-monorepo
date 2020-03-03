const express = require("express");
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "navFragment",
  version: "1.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true
});


app.use('/',podlet.middleware());


app.get(podlet.content(), (req, res) => {
res.status(200).podiumSend(`
<div class="topnav">
<a class="active" href="#">Link 1</a>
<a href="#">Link 2</a>
<a href="#">Link 3</a>
<input type="text" placeholder="Buscar..">
</div>
`);
});

app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

app.listen(3001, () => {
  console.info("pod-nav on");
});