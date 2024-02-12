import { conments } from "../conments";

interface Props{
    content : conments
}

export function ConmentDiv(props : Props){
    return <div className="row mb-2">
        <img src={props.content.avatar} alt="avatar" className="avatar rounded float-start col-6"/>
        <div className="col-6">
            <a href="mailto:">{props.content.email}</a>
            <p>{props.content.content}</p>
        </div>
    </div>
}