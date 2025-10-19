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


module.exports = router;
