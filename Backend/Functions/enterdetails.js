const { user, userdetails } = require("../db");

async function enterdatails (req,res) {

  const names = req.name;
  const details = req.body;       

    const userExist = await user.findOne({name : names});
    if(!userExist){
        return res.status(404).json({msg: "User Not Found"});
    }

    const alldetails = {


    }

    await userdetails.create({
        name: names,
        education: details.education,
        experience: details.experience,
        skills: details.skills,
        certifications: details.certifications,
        projects: details.projects,
        socialProfiles: details.socialProfiles,
        contactInformation: details.contactInformation,
        hobbiesAndInterests: details.hobbiesAndInterests,
        awards: details.awards,
        publications: details.publications,
        additionalInformation: details.additionalInformation
    });
    
 

    res.json({msg: "User Details Entered Successfully"});    
}

module.exports = enterdatails; // Export the enterdatails function for use in routes  0 