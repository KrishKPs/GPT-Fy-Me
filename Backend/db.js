const mongoose = require('mongoose');    

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))    
.catch(err => console.log(err));


const userSchema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true

    },
    date : {
        type: Date,
        default: Date.now
    }
}); 
const userDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        ref: 'User',
        required: true
    },
    education: [{
        degree: String,
        university: String,
        fieldOfStudy: String,
        startDate: Date,
        endDate: Date,
        description: String,
        grade: String,
        activitiesAndSocieties: String
    }],
    experience: [{
        jobTitle: String,
        company: String,
        startDate: Date,
        endDate: Date,
        description: String,
        location: String,
        responsibilities: [String]
    }],
    skills: {
        technicalSkills: [String],
        softSkills: [String],
        languages: [String]
    },
    certifications: [{
        name: String,
        issuingOrganization: String,
        issueDate: Date,
        expirationDate: Date,
        credentialID: String,
        credentialURL: String
    }],
    projects: [{
        title: String,
        description: String,
        startDate: Date,
        endDate: Date,
        technologiesUsed: [String],
        link: String
    }],
    socialProfiles: {
        linkedin: String,
        github: String,
        portfolio: String,
        twitter: String
    },
    contactInformation: {
        email: {
            type: String,
          
        },
        phone: String,
        address: String
    },
    hobbiesAndInterests: [String],
    awards: [{
        title: String,
        dateReceived: Date,
        description: String
    }],
    publications: [{
        title: String,
        publicationDate: Date,
        description: String,
        url: String
    }],
    additionalInformation: String
});
const user = mongoose.model('User', userSchema);    
const userdetails = mongoose.model('UserDetail', userDetailsSchema);


module.exports = {
    user : user, 
    userdetails : userdetails 
}  

