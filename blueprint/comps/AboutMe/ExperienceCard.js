import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const ExperienceCard = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div className="event-list text-center">
            <div className="mx-3">
                <div className="bg-secondary text-light m-auto rounded-pill w-25 p-1">{props.years}</div>
                <h5 className="">{props.positionTitle}</h5>

                <div className="d-grid d-block col-6 m-auto">
                    <button type="button" className="btn btn-primary" id={"popover"+ props.id}>Duties</button>
                </div>
                
         
                <Popover placement="bottom" isOpen={popoverOpen} toggle={toggle} target={"popover"+ props.id}>
                    <PopoverHeader>
                        {props.company}
                    </PopoverHeader>
                    <PopoverBody>
                        {props.duties}
                    </PopoverBody>
                </Popover>

            </div>
        </div>
    );
}

export default ExperienceCard;