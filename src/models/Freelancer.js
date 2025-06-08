const { v4: uuidv4 } = require('uuid');

class Freelancer {
    constructor({ name, email, phone, bio }) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.phone = phone || null;
        this.bio = bio || null;
        this.skills = [];
        this.links = [];
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }

    update({ name, email, phone, bio }) {
        this.name = name || this.name;
        this.email = email || this.email;
        this.phone = phone !== undefined ? phone : this.phone;
        this.bio = bio !== undefined ? bio : this.bio;
        this.updatedAt = new Date().toISOString();
        return this;
    }
}

module.exports = Freelancer;