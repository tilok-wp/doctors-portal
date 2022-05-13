import React from 'react';

const CardTestimonial = ({ item }) => {
    const { name, location, description, image } = item
    return (
        <div className="card w-full max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex items-center mt-2">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-3">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title block">{name}</h2>
                        <h5>{location}</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTestimonial;