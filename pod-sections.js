const express = require("express");
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "sectionsFragment",
  version: "1.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true
});


app.use('/',podlet.middleware());


app.get(podlet.content(), (req, res) => {
res.status(200).podiumSend(`
<ul>
      <li>Section 1</li>
      <li>Section 2</li>
      <li>Section 3</li>
      <li>Section 4</li>
      <li>Section 5</li>
    </ul>
`);
});

app.get(podlet.manifest(),(req,res)=>{
    res.status(200).send(podlet);
});

app.listen(3002, () => {
  console.info("pod-sections on");
});