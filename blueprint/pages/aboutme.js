import Head from 'next/head'
import { server } from '../config'
import AboutMeHeader from "../comps/AboutMe/AboutMeHeader"
import ExperienceSection from '../comps/AboutMe/ExperienceSection'
import SkillsSection from '../comps/AboutMe/SkillsSection'

export async function getServerSideProps() {
    const [skillsRes, experienceRes] = await Promise.all([
      fetch(`${server}/api/skillsapi`),
      fetch(`${server}/api/experienceapi`)
    ]);
    const [skillsData, experienceData] = await Promise.all([
      skillsRes.json(),
      experienceRes.json()
    ]);
    return { props: {  skillsData, experienceData }}
  }

const aboutme = ({ skillsData, experienceData}) => {
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | About Me</title>
            </Head>

            <AboutMeHeader />
            
            <SkillsSection skillsData={skillsData} />

            <ExperienceSection experienceData={experienceData} />
            
            
        </div>
    );
}

export default aboutme;