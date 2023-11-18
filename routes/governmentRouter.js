import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET request to /");
  res.render("governmentPage", { title: "Government Page" });
});

export default router;
