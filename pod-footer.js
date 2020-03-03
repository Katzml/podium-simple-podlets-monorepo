const express = require('');
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "footerFragment",
  version: "1.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true
});


app.use('/',podlet.middleware());


app.get(podlet.content(), (req, res) => {
res.status(200).podiumSend(`
<footer>De algo sirve</footer>
`);
});

app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

app.listen(3005, () => {
  console.info("pod-nav on");
});