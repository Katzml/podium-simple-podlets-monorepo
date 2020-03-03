const express = require("express");
const Podlet = require("@podium/podlet");

//instances
const app = express();
const podlet = new Podlet({
  name: "textFragment",
  version: "1.0",
  pathname: "/",
  manifest: "/manifest.json",
  content: "/",
  development: true
});

app.use("/", podlet.middleware());

app.get(podlet.content(), (req, res) => {
  res.status(200).podiumSend(`
<p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab adipisci
      exercitationem ad, praesentium delectus quasi iusto tempora rerum dolores dicta
      quis non sint sunt suscipit at nesciunt, id dolor vero.
      </p>
`);
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

app.listen(3004, () => {
  console.info("pod-text on");
});
