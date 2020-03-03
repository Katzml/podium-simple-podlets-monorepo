const express = require("express");
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "imageFragment",
  version: "1.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true
});


app.use('/',podlet.middleware());


app.get(podlet.content(), (req, res) => {
res.status(200).podiumSend(`
<div class="image">
    <img src="https://as.com/epik/imagenes/2019/01/20/portada/1548001612_230497_1548001814_noticia_normal.jpg"/>
<div>
`);
});

app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

app.listen(3003, () => {
  console.info("pod-image on");
});