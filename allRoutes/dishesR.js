const express = require("express");
const db = require('../data/helpers/dataAccessFunct');
const router = express.Router();

router.get("/", (req, res) => {
    db.getDishes()
      .then(dishes => {

        if (dishes.length > 0) {
          res.statue(200).json({ dishes });
        } else {
          res.status(400).json({ error: "Error, no dishes found." });
        }
      })
      .catch(err => {
        res.status(500)
            .json({ error: "Error! Please try again." });
      });
  });
  
  // get a dish by id
  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    db.getDish(id).then(dish => {
        // check if dish is an object and has a name present
        if (!dish.name) {
            res.status(400).json({ error: "Error! No dish exists with that id in the System." });
        } else {
            res.json({ dish });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "Error: Please try again." });
      });
  });

module.exports = router;
