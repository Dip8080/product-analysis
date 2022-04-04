import React from 'react';
import('./Home.css')

const Home = () => {
    return (
        <div className=' flex  py-6'>
            <div className=' bg-yellow-500 parent' >
                <h1 className='text-3xl subpixel-antialiased py-6 col-end-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </h1>
                <h1 className='text-3xl '>
                  <span className='text-red-800 subpixel-antialiased'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </h1>
                <p className='text-1xl py-2 subpixel-antialiased'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique ratione veritatis rem, hic perferendis facere dicta nesciunt ullam necessitatibus suscipit, voluptas, architecto ex. Excepturi totam nostrum non debitis nobis?
                </p>

                <button className='shadow cardBtn rounded bg-rose-700 hover:bg-rose-800 p-3  mt-3  flex subpixel-antialiased'>clicl for details</button>

            </div>
            <div className=' image pt-5'>
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;