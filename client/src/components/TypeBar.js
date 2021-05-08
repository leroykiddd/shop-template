import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            { device.types.map(type =>
                <ListGroup.Item
                    active={ type.id === device.selectedType.id }
                    key={type.id}
                    onClick={
                        () => device.setSelectedType(type)
                    }
                    style={{ cursor: "pointer" }}
                >
                    { type.name }
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
