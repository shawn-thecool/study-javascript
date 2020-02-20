const express = require("express");
const router = express.Router();

router.get(   "/"   , (req, res) => res.status(200).json({ func: "getMembers" }));
router.get(   "/:id", (req, res) => res.status(200).json({ func: "getMerberById-" + req.params.id }));
router.post(  "/"   , (req, res) => res.status(200).json(req.body));
router.put(   "/:id", (req, res) => res.status(200).json(req.body));
router.delete("/:id", (req, res) => res.status(200).json({ fnnc: "deleteMember" + req.params.id }));

module.exports = router;
