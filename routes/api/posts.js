const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const fileUpload = require("express-fileupload");
const Post = require("../../models/Post");

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

// import validation for posting a post
const validatePostInput = require("../../validation/post");

router.use(fileUpload());


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


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
            user: req.user.id,
            photoFile: req.body.photoFile
        });

        newPost.save().then(post => res.json(post))
            .catch(errors => res.status(400).json(errors));
    }
);

router.post('/addimage', (req, res) => {
    cloudinary.uploader.upload(req.files[0].data, (result) => {
        res.send(result);
    });

});

router.delete("/:id",(req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then((post) => res.json(post.id)))
        .catch(err => res.status(404).json({ success: false }))
});

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);
    //   debugger;

      if (!isValid) {
          return res.status(400).json(errors);
      }
    Post.findById(req.params.id)
    .then(post => {
        if(post){
            const {body} = req;
            Object.assign(post, body);
            // post = new Post({
            //     price: req.body.price,
            //     startdate: req.body.startdate,
            //     enddate: req.body.enddate,

            //     type: req.body.type,
            //     description: req.body.description,
            //     pickup: req.body.pickup,
            //     user: req.user.id
            // });
            const updatePost = new Post(post)
            updatePost.save().then(respost => res.json(respost));
        }
    })

    // const post = new Post({
    //     price: req.body.price,
    //     startdate: req.body.startdate,
    //     enddate: req.body.enddate,

    //     type: req.body.type,
    //     description: req.body.description,
    //     pickup: req.body.pickup,
    //     user: req.user.id
    // });

    
  }
);




module.exports = router;

