import React from 'react';

const Info = ({ img, heading, description, bgClass }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl p-3 ${bgClass}`}>
                <figure><img src={img} alt="Album" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Info;