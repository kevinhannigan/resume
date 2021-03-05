import experience from './configs/experience'
import education from './configs/education'
import skills from './configs/skills'
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import CertificationSection from './CertificationSection';
import ProjectsSection from './ProjectsSection';
import InterestsSection from './InterestsSection';
// import headshot from './images/headshot.jpg'

const expList = experience
const eduList = education
const skillList = skills.skills
const certList = skills.certifications
const projList = skills.projects
const intList = skills.interests

console.log(expList);

function App() {
  return (
    <div className='resume'>
      <div className='name-header'>
      {/* <img src={headshot} alt="profile" className="profile-pic" /> */}
        <h2>Kevin T. Hannigan</h2>
      </div>
      <div className='contact-header'>
        <p>khannigan94@gmail.com | 262.573.2242 | Chicago, IL </p>
      </div>
      <div className='resume-section-header'>
        <h2>Education</h2>
        {eduList.map(edu => (
          <EducationSection education={edu} />))}
      </div>
      <hr></hr>
      <div className='resume-section-header'>
        <h2>Experience </h2>
        {expList.map(exp => (
          <ExperienceSection experience={exp} />))}
      </div>
      <hr></hr>
      <div className='resume-section-header'>
        <h2>Skills, Certifications, Projects &amp; Interests</h2>
        <h3>Skills</h3>
        <SkillsSection skills={skillList} />
        <h3>Certifications</h3>
        <CertificationSection certifications={certList} />
        <h3>Interests</h3>
        <InterestsSection interests={intList} />
        <h3>Projects</h3>
        <ProjectsSection projects={projList} />
      </div>
    </div>
  );
}

export default App;
