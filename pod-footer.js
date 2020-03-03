const express = require('express');
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "footerFragment",
  version: "1.0.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true,
  css:[{}]
});


app.use('/',podlet.middleware());
app.use(express.static(__dirname + '/public/'));
app.get('/assets.css', (req, res) => {
  res.status(200).sendFile('./css/footer.css', err => {});
});

podlet.css({value:'./css/footer.css'});

app.get(podlet.content(), (req, res) => {
res.status(200).podiumSend(`
<div class="partebaja">
<footer>De algo sirve</footer>
</div>
`);
});



app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

console.info(podlet.css);
app.listen(3005, () => {
  console.info("pod-footer on");
});