const {Router} = require ('express');
const OngController = require ('./controllers/OngsControllers');
const IncidentController = require ('./controllers/IncidentControllers');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionsControllers');

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;