const { freelancers } = require('../data/inMemoryDB');
const Skill = require('../models/Skill');

module.exports = {
    Mutation: {
        addSkill: (_, { freelancerId, input }) => {
            const freelancer = freelancers.find(f => f.id === freelancerId);
            if (!freelancer) throw new Error('Freelancer not found');

            const newSkill = new Skill(input);
            freelancer.skills.push(newSkill);
            return newSkill;
        },
        removeSkill: (_, { freelancerId, skillId }) => {
            const freelancer = freelancers.find(f => f.id === freelancerId);
            if (!freelancer) return false;

            const initialLength = freelancer.skills.length;
            freelancer.skills = freelancer.skills.filter(s => s.id !== skillId);
            return freelancer.skills.length !== initialLength;
        }
    }
};