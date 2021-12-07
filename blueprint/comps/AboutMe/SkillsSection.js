import Image from 'next/image'

const SkillsSection = ({skillsData}) => {
    return (
        <section id="skills-section">
            <div className="container-fluid row">
                <div className="skills col-lg-12 text-white text-center p-4">
                    <h1 className="fw-bold text-center">Skills</h1>
                    
                    <div className="container">
                        <div className="skills row">
                            {skillsData.map(skillsData =>
                                <div className="col-3 m-auto p-2">
                                    <Image src={skillsData.image} layout="intrinsic" height={100} width={100} />

                                    <h3 className="font-monospace">{skillsData.title}</h3>
                                </div>)}
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
}

export default SkillsSection;