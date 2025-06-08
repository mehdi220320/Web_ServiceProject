const { gql } = require('apollo-server');

const typeDefs = gql`
  type Freelancer {
    id: ID!
    name: String!
    email: String!
    phone: String
    bio: String
    skills: [Skill!]!
    links: [ProfessionalLink!]!
    createdAt: String!
    updatedAt: String!
  }

  type Skill {
    id: ID!
    name: String!
    level: SkillLevel!
    category: String!
  }

  type ProfessionalLink {
    id: ID!
    type: LinkType!
    url: String!
    description: String
  }

  enum SkillLevel {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

  enum LinkType {
    LINKEDIN
    GITHUB
    PORTFOLIO
    PERSONAL
    OTHER
  }

  type Query {
    # Get a single freelancer by ID
    freelancer(id: ID!): Freelancer
    
    # Get all freelancers with optional filters
    freelancers(
      skill: String
      level: SkillLevel
      category: String
    ): [Freelancer!]!
    
    # Get all available skills
    skills: [Skill!]!
  }

  type Mutation {
    # Freelancer CRUD operations
    createFreelancer(input: FreelancerInput!): Freelancer!
    updateFreelancer(id: ID!, input: FreelancerInput!): Freelancer!
    deleteFreelancer(id: ID!): Boolean!
    
    # Skill management
    addSkill(freelancerId: ID!, input: SkillInput!): Skill!
    removeSkill(freelancerId: ID!, skillId: ID!): Boolean!
    
    # Professional link management
    addLink(freelancerId: ID!, input: LinkInput!): ProfessionalLink!
    removeLink(freelancerId: ID!, linkId: ID!): Boolean!
  }

  input FreelancerInput {
    name: String!
    email: String!
    phone: String
    bio: String
  }

  input SkillInput {
    name: String!
    level: SkillLevel!
    category: String!
  }

  input LinkInput {
    type: LinkType!
    url: String!
    description: String
  }
`;

module.exports = typeDefs;