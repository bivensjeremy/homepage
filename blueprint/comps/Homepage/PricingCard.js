import Link from 'next/link'

const PricingCard = (props) => {
    return (
        <div className="col">
            <div className="card mb-4 shadow-sm pb-2">
                <div className="card-header">
                    <h4 className="my-2">{props.title}</h4>
                </div>
                <div className="card-body">
                    <h5>Starting at</h5>
                    <h2 className="card-title pricing-card-title fw-bold pb-4">
                        <small className="text-muted fw-normal text-decoration-line-through">{props.startingPrice}</small> {props.discountPrice}
                        <div><small className="fw-normal fs-6 text-warning">For a limited time!</small></div>
                    </h2>

                    <div className="accordion accordion-flush" id={"accordionFor" + props.id}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={"flush-heading" + props.id}>
                                <button className="accordion-button collapsed border rounded bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + props.id} aria-expanded="false" aria-controls={"flush-collapse" + props.id}>
                                    More About This Package
                                </button>
                            </h2>
                            
                            <div id={"flush-collapse" + props.id} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + props.id} data-bs-parent={"#accordionFor" + props.id}>
                                <div className="accordion-body text-start">
                                    {props.additionalInfo}
                                </div>
                            </div>
                        </div>   
                    </div>



                    {/* <ul className="list-unstyled mt-3 mb-4">
                        {props.description.map(description => <li key={props.id}>{description}</li>)}
                    </ul> */}
                    
                    
                    {/* <Link href={'/requestservice#' + props.url}>
                        <a type="button" className="w-100 btn btn-lg btn-primary">More About This Package</a>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default PricingCard;