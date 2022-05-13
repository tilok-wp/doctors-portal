import React from 'react';

const Info = ({ img, heading, description, bgClass }) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl p-3 ${bgClass}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Info;