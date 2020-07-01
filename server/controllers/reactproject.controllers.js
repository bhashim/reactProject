const reactProject = require('../models/reactProject.model');

module.exports.createreactProject = (req, res) => {
    reactProject.create(req.body)
        .then(createdreactProject => res.json(createdreactProject))
        .catch(err => res.status(400).json(err));
};

module.exports.getAll = (_req, res) => {
    reactProject.find()
        .then(reactProjects => res.json(reactProjects))
        .catch(err => res.json(err))
};

module.exports.getOne = (req, res) => {
    reactProject.findById(req.params.id)
        .then(reactProject => res.json(reactProject))
        .catch(err => res.json(err));
};

module.exports.delete = (req, res) => {
    reactProject.findByIdAndDelete(req.params.id)
        .then(() => res.json({ status: 'success' }))
        .catch(err => res.json(err));
};

module.exports.update = (req, res) => {
    reactProject.findByIdAndUpdate(req.params.id,
        // {
        //     name: req.body.name,
        //     type: req.body.type,
        //     desc: req.body.desc,
        //     skill1:req.body.skill1,
        //     skill2:req.body.skill2,
        //     skill3:req.body.skill3
        // },
        req.body,
        {
            new: true,
            returnValidators: true
        }
    )
        .then(updatedreactProject => res.json(updatedreactProject))
        .catch(err => res.status(400).json(err));

}