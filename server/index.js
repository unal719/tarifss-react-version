const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const port = 5000;

let tariffs = [
  {
    id: 1,
    price: 89.99,
    download: 25,
    upload: 4,
    name: "Full of Fun",
    popularity: 4,
    benefits: [
      "Free Tv Box",
      "Golden Cinema Packages free for 3 months",
      "Free Setup",
    ],
  },

  {
    id: 2,
    price: 110.99,
    download: 100,
    upload: 8,
    name: "Smiling 100",
    popularity: 3,
    benefits: ["Hd Tv Box is only 8.99€", "Free 25 GB cloud service"],
  },

  {
    id: 3,
    price: 159.99,
    download: 125,
    upload: 20,
    name: "Unlimited Full",
    popularity: 1,
    benefits: [
      "Free Hd MovieBox Plus",
      "25 GB cloud service",
      "50 min Voice Service",
      "Free Premium Spor Package",
    ],
  },

  {
    id: 4,
    price: 59.99,
    download: 50,
    upload: 4,
    name: "Night Owl",
    popularity: 5,
    benefits: [
      "Download speed 75 Mbit/s between at 00:00 am - 00:06 am",
      "Upload speed 6 Mbit/s between at 00:00 am - 00:06 am",
    ],
  },
  {
    id: 5,
    price: 189.99,
    download: 150,
    upload: 25,
    name: "Gamer Package",
    popularity: 2,
    benefits: [
      "Once 100€ for steam account wallet",
      "Free game every month for Playstore Subscription",
    ],
  },
];

app.get("/api/tariffs", (req, res) => {
  setTimeout(() => {
    res.send(tariffs);
  }, 250);
});

app.listen(port, () =>
  console.log(`Project ICE server listening on port ${port}!`)
);
