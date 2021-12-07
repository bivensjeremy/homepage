const WhatIOfferCard = (props) => {
    return (
        <div className="p-2">
            <div className="mt-5 h-100 bg-light p-4 rounded">
                <div className="card-body m-auto">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default WhatIOfferCard;