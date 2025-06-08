const freelancerResolvers = require('./freelancerResolvers');
const skillResolvers = require('./skillResolvers');
const linkResolvers = require('./linkResolvers');

module.exports = {
    Query: {
        ...freelancerResolvers.Query,
    },
    Mutation: {
        ...freelancerResolvers.Mutation,
        ...skillResolvers.Mutation,
        ...linkResolvers.Mutation
    }
};