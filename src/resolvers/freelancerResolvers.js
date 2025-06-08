const { freelancers } = require('../data/inMemoryDB');
const Freelancer = require('../models/Freelancer');

module.exports = {
    Query: {
        freelancer: (_, { id }) => freelancers.find(f => f.id === id),
        freelancers: (_, { skill, level }) => {
            let results = [...freelancers];
            if (skill) {
                results = results.filter(f =>
                    f.skills.some(s => s.name.toLowerCase().includes(skill.toLowerCase())))
            }
            if (level) {
                results = results.filter(f =>
                    f.skills.some(s => s.level === level))
            }
            return results;
        }
    },
    Mutation: {
        createFreelancer: (_, { input }) => {
            const newFreelancer = new Freelancer(input);
            freelancers.push(newFreelancer);
            return newFreelancer;
        },
        updateFreelancer: (_, { id, input }) => {
            const index = freelancers.findIndex(f => f.id === id);
            if (index === -1) throw new Error('Freelancer not found');
            freelancers[index] = freelancers[index].update(input);
            return freelancers[index];
        },
        deleteFreelancer: (_, { id }) => {
            const index = freelancers.findIndex(f => f.id === id);
            if (index === -1) return false;
            freelancers.splice(index, 1);
            return true;
        }
    }
};