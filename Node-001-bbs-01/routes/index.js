import DB from "../models/index.js";
import express from "express";

const router = express.Router();
const BBS = DB.models.tbl_bbs;

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "callor.com Express" });
});

router.get("/bbs", async (req, res, next) => {
  const bbs = await BBS.findAll();
  res.json(bbs); // res.send("boooooo");
});

router.get("/insert", async (req, res) => {
  const mBBS = {
    b_title: "hi",
    b_content: "hihihihihi",
  };
  try {
    await BBS.create(mBBS);
    res.redirect("/bbs");
  } catch (error) {
    res.send("SQL ERROR");
  }
});

router.post("/insert", async (req, res) => {
  const bbs = new BBS(req.body);
  try {
    await BBS.create(bbs);
    res.redirect("/bbs");
  } catch (error) {
    res.send("INSERT ERROR");
  }
});

export default router;
