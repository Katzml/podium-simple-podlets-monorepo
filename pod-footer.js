const express = require('express');
const Podlet = require("@podium/podlet");
const path = require('path');

//instances
const app = express();
const podlet = new Podlet({
  name: "footerFragment",
  version: "1.0.0",
  pathname: "/",
  proxy:{"assets":"/assets"},
  manifest: "/manifest.json",
  content: "/",
  development: true
});

app.use('/',podlet.middleware());
podlet.css({value:`http://localhost:3005/assets/footer.css`,type:`text/css`});
app.use('/assets',express.static(path.join(__dirname, '/public')));

app.get('/assets',(req,res)=>res.status(200).sendFile(`http://localhost:3005/assets/footer.css`));
app.get('/', (req, res) => {
res.status(200).podiumSend(`
<footer>De algo sirve</footer>
`);
});


app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

console.info(podlet.css());
app.listen(3005, () => {
  console.info("pod-footer on");
});