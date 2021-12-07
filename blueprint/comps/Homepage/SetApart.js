import SetApartCard from "./SetApartCard";

function createSetApartCard(setApartInfo){
  return(
    <SetApartCard
      key={setApartInfo.id}
      icon={setApartInfo.icon}
      title={setApartInfo.title}
      description={setApartInfo.description}
    />
  )
}

const SetApart = ({setMeApartData}) => {
    return (
        <section id="set-apart">
          <div className="container-fluid">     
            <h1 className="fw-bold pt-5">What Sets Bivens Blueprint Apart?</h1>
            <div className="row" key={setMeApartData.id}>
              {setMeApartData.map(createSetApartCard)}
            </div>
          </div>
        </section>
    );
}

export default SetApart;