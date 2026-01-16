const express = require("express");
const router = express.Router();
const {
  createMatch,
  readAllMatches,
  readMatch,
  updateMatch,
  deleteMatch,
} = require("../controllers/match");

// CRUD Matches
// Create one match
router.post("/", createMatch);
// Read all matches
router.get("/", readAllMatches);
// Read match
router.get("/:id", readMatch);
// Update match
router.put("/:id", updateMatch);
// Delete match
router.delete("/:id", deleteMatch);

module.exports = router;
