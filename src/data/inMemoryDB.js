const Freelancer = require('../models/Freelancer');
const Skill = require('../models/Skill');
const ProfessionalLink = require('../models/ProfessionalLink');

const freelancers = [
    new Freelancer({
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        bio: "Full-stack developer"
    })
];

const sampleSkill = new Skill({
    name: "JavaScript",
    level: "EXPERT",
    category: "Web Development"
});

const sampleLink = new ProfessionalLink({
    type: "GITHUB",
    url: "https://github.com/johndoe",
    description: "My open-source projects"
});

freelancers[0].skills.push(sampleSkill);
freelancers[0].links.push(sampleLink);

module.exports = {
    freelancers
};