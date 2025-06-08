const freelancerResolvers = require('./freelancerResolvers');


module.exports = {
    Query: {
        ...freelancerResolvers.Query,
    },
    Mutation: {
        ...freelancerResolvers.Mutation,
  
    }
};