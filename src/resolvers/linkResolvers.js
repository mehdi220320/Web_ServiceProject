const { freelancers } = require('../data/inMemoryDB');
const ProfessionalLink = require('../models/ProfessionalLink');

module.exports = {
    Mutation: {
        /**
         * Adds a professional link to a freelancer's profile
         * @param {string} freelancerId - ID of the freelancer
         * @param {object} input - Link details (type, url, description)
         */
        addLink: (_, { freelancerId, input }) => {
            const freelancer = freelancers.find(f => f.id === freelancerId);
            if (!freelancer) {
                throw new Error('Freelancer not found');
            }

            // Validate URL format
            if (!isValidUrl(input.url)) {
                throw new Error('Invalid URL format');
            }

            const newLink = new ProfessionalLink(input);
            freelancer.links.push(newLink);
            return newLink;
        },

        /**
         * Removes a professional link from a freelancer's profile
         * @param {string} freelancerId - ID of the freelancer
         * @param {string} linkId - ID of the link to remove
         * @returns {boolean} - True if successful, false if not found
         */
        removeLink: (_, { freelancerId, linkId }) => {
            const freelancer = freelancers.find(f => f.id === freelancerId);
            if (!freelancer) {
                return false;
            }

            const initialLength = freelancer.links.length;
            freelancer.links = freelancer.links.filter(link => link.id !== linkId);
            return freelancer.links.length !== initialLength;
        }
    }
};

/**
 * Helper function to validate URL format
 * @param {string} url
 * @returns {boolean}
 */
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}