const SetApartCard = (props) => {
    return (
        <div className="col-12 col-lg-4 py-2">
            <div className="card h-100 shadow mb-4 bg-light rounded">
                <div className="card-body">
                    <i className={props.icon + " fs-1"} ></i>
                    <h3 className="card-title py-3">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
       </div>
    );
}

export default SetApartCard;