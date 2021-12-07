import Image from 'next/image'
import Link from 'next/link'

const PortfolioCard = (props) => {
    return (
        <div className="col">
            <div className="card text-center shadow-sm bg-light h-100">
                <div className="p-3">
                    <Image 
                        src={"/images" + props.icon} 
                        layout="intrinsic"
                        height={props.height}
                        width={props.width}
                        alt={props.title} 
                    />    
                </div>
                
                <div className="card-body text-dark">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text d-flex">{props.description}</p>
                </div>
                <div className="card-footer">
                    <Link href={props.link}><button className="btn btn-dark py-2">Check out my {props.title} project</button></Link>
                </div>
            </div>
        </div>
        
    );
}

export default PortfolioCard; 