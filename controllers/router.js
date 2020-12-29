const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js')
const foodPosts = require('../models/seed.js')



router.get('', (req, res) => {
    res.render('index.ejs')
})

router.get('/foods', (req, res) => {
    Post.find({}, (error, allPosts) => {
        res.render('foods.ejs',
            {
                posts: allPosts
            }
        )
    })
})

router.get('/seed', (req, res) => {
    post.create(foodPosts, (error, posts) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`${posts} has been added to the database`);
            res.redirect('/gtgv')
        }
    })
})









module.exports = router;
