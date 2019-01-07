const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");

// import validation for posting a post
const validatePostInput = require("../../validation/post");



///index page
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ notweetsfound: "No posts found" }));
});

//////user's posts
router.get('/user/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res
          .status(404)
          .json({ nopostfound: "No post found with that ID" })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            price: req.body.price,
            startdate: req.body.startdate,
            enddate: req.body.enddate,

            type: req.body.type,
            description: req.body.description,
            pickup: req.body.pickup,
            user: req.user.id
        });

        newPost.save().then(post => res.json(post));
    }
);

router.delete("/:user_id/:id",(req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false }))
});

router.patch(
  "/update/:user_id/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
        price: req.body.price,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        type: req.body.type,
        description: req.body.description,
        pickup: req.body.pickup,
        user: req.user.id,
        photoFile: req.body.photoFile
    });

    newPost.save().then(post => res.json(post));
  }
);




module.exports = router;

