// import users model
const {Thoughts} = require('../models');

const thoughtsController = {
    
    createThoughts({body}, res) {
        Thoughts.create(body)
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.status(400).json(err));
    }
}

module.exports = thoughtsController; 