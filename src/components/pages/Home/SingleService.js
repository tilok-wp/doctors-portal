import React from 'react';



const SingleService = ({ services }) => {
    const { name, desc, image } = services
    return (
        <div class="card shadow-xl lg:max-w-lg text-center">
            <figure className='w-full'><img className='img-full' src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title mx-auto text-2xl">{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default SingleService;