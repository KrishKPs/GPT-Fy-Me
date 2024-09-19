import { useState } from "react";
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import { Link } from "react-router-dom";




export function DataInput() {
    

    const [education, setEducation] = useState([{ degree: '', university: '', fieldOfStudy: '', startDate: '', endDate: '', description: '', grade: '', activitiesAndSocieties: '' }]);
    const [experience, setExperience] = useState([{ jobTitle: '', company: '', startDate: '', endDate: '', description: '', location: '', responsibilities: [''] }]);
    const [skills, setSkills] = useState({ technicalSkills: [''], softSkills: [''], languages: [''] });
    const [certifications, setCertifications] = useState([{ name: '', issuingOrganization: '', issueDate: '', expirationDate: '', credentialID: '', credentialURL: '' }]);
    const [projects, setProjects] = useState([{ title: '', description: '', startDate: '', endDate: '', technologiesUsed: [''], link: '' }]);
    const [socialProfiles, setSocialProfiles] = useState({ linkedin: '', github: '', portfolio: '', twitter: '' });
    const [contactInformation, setContactInformation] = useState({ email: '', phone: '', address: '' });
    const [hobbiesAndInterests, setHobbiesAndInterests] = useState(['']);
    const [awards, setAwards] = useState([{ title: '', dateReceived: '', description: '' }]);
    const [publications, setPublications] = useState([{ title: '', publicationDate: '', description: '', url: '' }]);
    const [additionalInformation, setAdditionalInformation] = useState('');

    const token = localStorage.getItem('token');     

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            education,
            experience,
            skills,
            certifications,
            projects,
            socialProfiles,
            contactInformation,
            hobbiesAndInterests,
            awards,
            publications,
            additionalInformation
        };



        try {
            const response = await axios.post('http://localhost:3048/gpt/enterdetails', formData , {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log('Data submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    // Handle change for individual inputs
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedExperience = [...experience];
        updatedExperience[index][field] = value;
        setExperience(updatedExperience);
    };

    const handleSkillsChange = (field, value) => {
        setSkills(prevSkills => ({
            ...prevSkills,
            [field]: value.split(',').map(skill => skill.trim())
        }));
    };

    const handleCertificationsChange = (index, field, value) => {
        const updatedCertifications = [...certifications];
        updatedCertifications[index][field] = value;
        setCertifications(updatedCertifications);
    };

    const handleProjectsChange = (index, field, value) => {
        const updatedProjects = [...projects];
        updatedProjects[index][field] = value;
        setProjects(updatedProjects);
    };

    const handleSocialProfilesChange = (field, value) => {
        setSocialProfiles(prevProfiles => ({
            ...prevProfiles,
            [field]: value
        }));
    };

    const handleContactInformationChange = (field, value) => {
        setContactInformation(prevContact => ({
            ...prevContact,
            [field]: value
        }));
    };

    const handleHobbiesChange = (index, value) => {
        const updatedHobbies = [...hobbiesAndInterests];
        updatedHobbies[index] = value;
        setHobbiesAndInterests(updatedHobbies);
    };

    const handleAwardsChange = (index, field, value) => {
        const updatedAwards = [...awards];
        updatedAwards[index][field] = value;
        setAwards(updatedAwards);
    };

    const handlePublicationsChange = (index, field, value) => {
        const updatedPublications = [...publications];
        updatedPublications[index][field] = value;
        setPublications(updatedPublications);
    };

    // Render input fields
    return (
        <form className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Information</h2>

            

            {/* Education Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, 'degree', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="University" value={edu.university} onChange={(e) => handleEducationChange(index, 'university', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Field of Study" value={edu.fieldOfStudy} onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Start Date" value={edu.startDate} onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="End Date" value={edu.endDate} onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Description" value={edu.description} onChange={(e) => handleEducationChange(index, 'description', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                        <input type="text" placeholder="Grade" value={edu.grade} onChange={(e) => handleEducationChange(index, 'grade', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Activities and Societies" value={edu.activitiesAndSocieties} onChange={(e) => handleEducationChange(index, 'activitiesAndSocieties', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Experience Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="End Date" value={exp.endDate} onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Description" value={exp.description} onChange={(e) => handleExperienceChange(index, 'description', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                        <input type="text" placeholder="Location" value={exp.location} onChange={(e) => handleExperienceChange(index, 'location', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Responsibilities (comma-separated)" value={exp.responsibilities.join(', ')} onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value.split(',').map(r => r.trim()))} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                    </div>
                ))}
            </div>

            {/* Skills Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <input type="text" placeholder="Technical Skills (comma-separated)" value={skills.technicalSkills.join(', ')} onChange={(e) => handleSkillsChange('technicalSkills', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Soft Skills (comma-separated)" value={skills.softSkills.join(', ')} onChange={(e) => handleSkillsChange('softSkills', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Languages (comma-separated)" value={skills.languages.join(', ')} onChange={(e) => handleSkillsChange('languages', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
            </div>

            {/* Certifications Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                {certifications.map((cert, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Name" value={cert.name} onChange={(e) => handleCertificationsChange(index, 'name', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Issuing Organization" value={cert.issuingOrganization} onChange={(e) => handleCertificationsChange(index, 'issuingOrganization', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Issue Date" value={cert.issueDate} onChange={(e) => handleCertificationsChange(index, 'issueDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Expiration Date" value={cert.expirationDate} onChange={(e) => handleCertificationsChange(index, 'expirationDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Credential ID" value={cert.credentialID} onChange={(e) => handleCertificationsChange(index, 'credentialID', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Credential URL" value={cert.credentialURL} onChange={(e) => handleCertificationsChange(index, 'credentialURL', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Projects Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Projects</h3>
                {projects.map((project, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Title" value={project.title} onChange={(e) => handleProjectsChange(index, 'title', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Description" value={project.description} onChange={(e) => handleProjectsChange(index, 'description', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                        <input type="date" placeholder="Start Date" value={project.startDate} onChange={(e) => handleProjectsChange(index, 'startDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="End Date" value={project.endDate} onChange={(e) => handleProjectsChange(index, 'endDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Technologies Used (comma-separated)" value={project.technologiesUsed.join(', ')} onChange={(e) => handleProjectsChange(index, 'technologiesUsed', e.target.value.split(',').map(t => t.trim()))} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Link" value={project.link} onChange={(e) => handleProjectsChange(index, 'link', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Social Profiles Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
                <input type="text" placeholder="LinkedIn" value={socialProfiles.linkedin} onChange={(e) => handleSocialProfilesChange('linkedin', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="GitHub" value={socialProfiles.github} onChange={(e) => handleSocialProfilesChange('github', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Portfolio" value={socialProfiles.portfolio} onChange={(e) => handleSocialProfilesChange('portfolio', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Twitter" value={socialProfiles.twitter} onChange={(e) => handleSocialProfilesChange('twitter', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
            </div>

            {/* Contact Information Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <input type="email" placeholder="Email" value={contactInformation.email} onChange={(e) => handleContactInformationChange('email', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Phone" value={contactInformation.phone} onChange={(e) => handleContactInformationChange('phone', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="Address" value={contactInformation.address} onChange={(e) => handleContactInformationChange('address', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
            </div>

            {/* Hobbies and Interests Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Hobbies and Interests</h3>
                {hobbiesAndInterests.map((hobby, index) => (
                    <input key={index} type="text" placeholder="Hobby" value={hobby} onChange={(e) => handleHobbiesChange(index, e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                ))}
            </div>

            {/* Awards Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Awards</h3>
                {awards.map((award, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Title" value={award.title} onChange={(e) => handleAwardsChange(index, 'title', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Date Received" value={award.dateReceived} onChange={(e) => handleAwardsChange(index, 'dateReceived', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Description" value={award.description} onChange={(e) => handleAwardsChange(index, 'description', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                    </div>
                ))}
            </div>

            {/* Publications Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Publications</h3>
                {publications.map((publication, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-sm">
                        <input type="text" placeholder="Title" value={publication.title} onChange={(e) => handlePublicationsChange(index, 'title', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <input type="date" placeholder="Publication Date" value={publication.publicationDate} onChange={(e) => handlePublicationsChange(index, 'publicationDate', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                        <textarea placeholder="Description" value={publication.description} onChange={(e) => handlePublicationsChange(index, 'description', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
                        <input type="text" placeholder="URL" value={publication.url} onChange={(e) => handlePublicationsChange(index, 'url', e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Additional Information Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <textarea placeholder="Additional Information" value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} className="w-full mb-2 p-2 border border-gray-300 rounded"></textarea>
            </div>

            {/* Submit Button */}
           {/* Submit Button */}
<button onClick={handleSubmit} type="button" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>

 <Link to='/dashboard' className="block text-center mt-4 text-blue-600 hover:underline">Skip for Now</Link>   

        </form>
    );
}
