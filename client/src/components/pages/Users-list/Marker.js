import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name, image } = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                // image={image}
            />
            <div className="pulse" />
        </div>
    );
};

export default Marker;