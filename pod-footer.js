const express = require('express');
const Podlet = require("@podium/podlet");
const path = require('path');

//instances
const app = express();
const podlet = new Podlet({
  name: "footerFragment",
  version: "1.0.0",
  pathname: "/footer",
  proxy:{"assets":"/assets"},
  manifest: "/manifest.json",
  content: "/footer",
  development: true,
  prefix:true
});

app.use('/footer',podlet.middleware());
app.use('/assets',express.static('./public'));

// podlet.css({value:`http://127.0.0.1:3005/assets/footer.css`,type:`text/css`});
// app.get('/assets',(req,res)=>res.status(200).sendFile(`http://127.0.0.1:3005/assets/footer.css`));


// app.get('/footer', (req, res) => {
//   res.status(200).sendFile(podlet.css, err => {});
// });

podlet.css([{value:`http://localhost:3005/assets/footer.css`}]);

//app.get('/footer.css',(req,res)=>res.status(200).sendFile('./assets/footer.css'))

app.get(podlet.content(), (req, res) => {
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