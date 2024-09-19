const zod = require('zod'); 


const useSchema = zod.object({ 
    name: zod.string().min(1), 
    email: zod.string().email(), 
    password: zod.string().min(6),
 }); 

 const userDetailSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    education: zod.array(
        zod.object({
            degree: zod.string().optional(),
            university: zod.string().optional(),
            fieldOfStudy: zod.string().optional(),
            startDate: zod.date().optional(), // If date strings are in ISO format, use zod.date()
            endDate: zod.date().optional(),
            description: zod.string().optional(),
            grade: zod.string().optional(),
            activitiesAndSocieties: zod.string().optional()
        })
    ).optional(),
    experience: zod.array(
        zod.object({
            jobTitle: zod.string().optional(),
            company: zod.string().optional(),
            startDate: zod.date().optional(),
            endDate: zod.date().optional(),
            description: zod.string().optional(),
            location: zod.string().optional(),
            responsibilities: zod.array(zod.string()).optional()
        })
    ).optional(),
    skills: zod.object({
        technicalSkills: zod.array(zod.string()).optional(),
        softSkills: zod.array(zod.string()).optional(),
        languages: zod.array(zod.string()).optional()
    }).optional(),
    certifications: zod.array(
        zod.object({
            name: zod.string().optional(),
            issuingOrganization: zod.string().optional(),
            issueDate: zod.date().optional(),
            expirationDate: zod.date().optional(),
            credentialID: zod.string().optional(),
            credentialURL: zod.string().optional()
        })
    ).optional(),
    projects: zod.array(
        zod.object({
            title: zod.string().optional(),
            description: zod.string().optional(),
            startDate: zod.date().optional(),
            endDate: zod.date().optional(),
            technologiesUsed: zod.array(zod.string()).optional(),
            link: zod.string().optional()
        })
    ).optional(),
    socialProfiles: zod.object({
        linkedin: zod.string().optional(),
        github: zod.string().optional(),
        portfolio: zod.string().optional(),
        twitter: zod.string().optional()
    }).optional(),
    contactInformation: zod.object({
        email: zod.string().email("Invalid email address").min(1, "Email is required"),
        phone: zod.string().optional(),
        address: zod.string().optional()
    }).optional(),
    hobbiesAndInterests: zod.array(zod.string()).optional(),
    awards: zod.array(
        zod.object({
            title: zod.string().optional(),
            dateReceived: zod.date().optional(),
            description: zod.string().optional()
        })
    ).optional(),
    publications: zod.array(
        zod.object({
            title: zod.string().optional(),
            publicationDate: zod.date().optional(),
            description: zod.string().optional(),
            url: zod.string().optional()
        })
    ).optional(),
    additionalInformation: zod.string().optional()
});
 module.exports = {

    useSchema : useSchema,
    userDetailSchema : userDetailSchema  
 }