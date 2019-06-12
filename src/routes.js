const express = require('express');
const authMiddle = require('./middleware/authMiddleware');
const AuthController = require('./controllers/authController');
const noteController = require('./controllers/noteController');

const routes = express.Router();

routes.post('/register', AuthController.register );
routes.post('/login', AuthController.login );
routes.get('/notes', authMiddle ,noteController.getNotes );
routes.post('/notes', authMiddle ,noteController.createNotes );

module.exports =  routes;