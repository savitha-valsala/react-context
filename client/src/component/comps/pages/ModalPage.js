import Modal from "../Modal";
import Button from "../Button";
import {useState} from "react";
function ModalPage(){
    const [showModal, setShowModal] = useState(false);
     const handleClick =()=>{
        setShowModal(true);
     }
     const handleClose =()=>{
        setShowModal(false);
     }
     const actionBar = (<div><Button onClick={handleClose} primary>I Accept</Button></div> );
     const modal = (<Modal onClose={handleClose} actionBar={actionBar}>       
        <p>
            Her is Some Important agreement for you to accept
        </p>
        </Modal>);
        

    return(
            <div className="relative">
               
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa sem, vel ultricies risus cursus quis. Fusce ac metus ac nisi sagittis volutpat quis et diam. Suspendisse nec tortor at sem pellentesque convallis. Suspendisse vitae ligula commodo, gravida velit at, bibendum orci. Aenean dignissim dui ac nunc semper ullamcorper. Praesent velit turpis, sollicitudin in porta vel, vulputate id arcu. Morbi tincidunt ultricies ligula et tincidunt. Ut eu porta ex. Fusce vel nulla ornare, efficitur ipsum sit amet, faucibus dolor. Duis tristique ante odio, quis finibus quam commodo ac. Pellentesque id ultricies libero. Vivamus malesuada sollicitudin tempus. Fusce vitae magna convallis, volutpat tellus ut, varius libero. Donec lobortis lectus sit amet nunc tempor tempor. Aliquam elementum ullamcorper eros convallis malesuada.
                </p>

                <Button primary onClick={handleClick}>open Modal</Button>
                {showModal && modal}
            </div>
    )
}
export default ModalPage;