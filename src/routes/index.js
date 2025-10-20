const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHome);

router.get('/projects', (req, res) => {
    res.render('pages/projects', { title: 'Projects' });
});

router.get('/skills', (req, res) => {
    res.render('pages/skills', { title: 'Skills' });
});
router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});
router.get('/aboutme', (req, res) => {
    res.render('pages/aboutme', { title: 'About Me' });
})
router.get('/journey', (req, res) => {
    res.render('pages/journey', { title: 'My Coding Journey' });
})


module.exports = router;
