import express from "express";
const router = express.Router();

router.get("/about", (req, res) => {
  console.log("GET request to /about");
  res.render("about", { title: "About Page" });
});

export default router;
