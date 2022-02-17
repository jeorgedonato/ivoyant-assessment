import React from "react";
import { PersonInterface } from "../interfaces/personInterface";

const PersonList = ( { props } : { props: PersonInterface } ) => {
    return (
        <>
            <tr >
                <td  className="p-4 border">{props.id}</td>
                <td  className="p-4 border">{props.firstName}</td>
                <td  className="p-4 border">{props.lastName}</td>
            </tr>
        </>
    )
}

export default PersonList