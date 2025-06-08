const { v4: uuidv4 } = require('uuid');

class ProfessionalLink {
    constructor({ type, url, description }) {
        this.id = uuidv4();
        this.type = type;
        this.url = url;
        this.description = description || null;
    }
}

module.exports = ProfessionalLink;