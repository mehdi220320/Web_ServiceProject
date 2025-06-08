const { v4: uuidv4 } = require('uuid');

class Skill {
    constructor({ name, level, category }) {
        this.id = uuidv4();
        this.name = name;
        this.level = level;
        this.category = category;
    }
}

module.exports = Skill;