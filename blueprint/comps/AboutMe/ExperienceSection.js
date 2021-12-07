import ExperienceCard from "./ExperienceCard";

function createExperienceCard(expInfo){
    return(
        <ExperienceCard
            key={expInfo.key}
            id={expInfo.id}
            years={expInfo.years}
            positionTitle={expInfo.positionTitle}
            company={expInfo.company}
            duties={expInfo.duties}
        />
    )
}

const ExperienceSection = ({experienceData}) => {
    return (
        <section className="experience py-5">
            <div className="mx-auto text-center">
                <div className="mb-5">
                    <h1 className="fw-bold">Work Experience</h1>
                </div>
            </div>
            
            <div className="hori-timeline">
                {/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                </div> */}
                <div className="events d-flex flex-column flex-md-row-reverse">
                    {experienceData.map(createExperienceCard)}
                </div>
            </div>
               
        </section>
    );
}

export default ExperienceSection;