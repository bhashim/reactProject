const reactProjectsCtl = require('../controllers/reactproject.controllers');
module.exports = app => {
    app.get('/api/reactProjects', reactProjectsCtl.getAll);
    app.post('/api/reactProjects/new', reactProjectsCtl.createreactProject);
    app.get('/api/reactProjects/:id', reactProjectsCtl.getOne);
    app.delete('/api/reactProjects/delete/:id', reactProjectsCtl.delete);
    app.put('/api/reactProjects/update/:id', reactProjectsCtl.update);

}