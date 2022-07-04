import React from "react";
import { FaTrash } from "react-icons/fa";

export const ClientRow = ({ client }) => {
    return (
        <React.Fragment>
            <tr>
                <td>{ client.name }</td>
                <td>{ client.email }</td>
                <td>{ client.phone }</td>
                <td>
                    <button className="btn btn-danger btn-sm">
                        <FaTrash />
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};


