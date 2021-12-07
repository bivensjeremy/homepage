const ServicesCard = (props) => {
    return (
        <div id="onepage" className="col-lg-4">
            <div className=" text-center snip1214 p-md-3 mb-3">
                
                <div className="m-auto bg-light border border-3 rounded-3 ">
                    <h3 className="plan-title fw-bold p-2 text-white rounded-3">{props.title}</h3>
                    
                    <div>
                        <span className="fs-1 fw-bold text-decoration-line-through text-muted">{props.startingPrice}</span>

                        <span className="fs-1 fw-bold"> {props.discountPrice}</span>
                        <small className="text-muted">/Project Cost</small>
                        
                        <div className="fs-5 text-warning">For a limited time, take advantage of special pricing!</div>
                    </div>
                    <div>
                        <span className="fs-1 fw-bold">{props.monthlyPrice}</span>
                        <small className="text-muted">/Monthly</small>
                    </div>
                
                    <div className="plan-features">
                        <div className="col text-dark mb-4">
                            {props.description.map(description => <div className="row" key={props.id}>{description}</div>)}
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesCard;