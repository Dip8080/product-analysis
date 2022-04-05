import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';
import Reviewcard from '../ReviewCard/Reviewcard';
import('./Home.css')

const Home = () => {
    const[review,setreview] = useReview();
    let navigate = useNavigate();
  const funHandle =()=>{
  
      navigate ('/review');
     
  }
    return (
        <div className='p-5 py-6'>
            <div className='flex '>
            <div className=' bg-fuchsia-500 parent left' >
                <h1 className='text-3xl subpixel-antialiased py-6 col-end-6 shadow-lg p-2'>
                   Don't just wear it , 
                </h1>
                <h1 className='text-4xl shadow-lg p-2'>
                  <span className='text-fuchsia-800 subpixel-antialiased'>  Live in it </span>
                </h1>
                <p className='text-1xl py-2 subpixel-antialiased'>
                   Extemly comfortable , easy to wear , water proof and colorful
                   collection of sneakers . jog in it , gym in it , wear it in your
                   workplace . your feet won't feel a thing .
                </p>

                <button className='shadow-lg cardBtn rounded bg-fuchsia-700 hover:bg-fuchsia-800 p-3  mt-3  flex subpixel-antialiased'>clicl for details</button>

            </div>
            <div className=' image pt-5'>
                    <img  src="https://wallpaper.dog/large/11381.jpg" alt="" />
            </div>
            </div>
            <div className=''>
                <h1 className='flex justify-center text-2xl my-5 shadow-lg p-3'>customers review({review.length})</h1>
                
                {
                    review.slice(0,3).map(x=><Reviewcard key={x.id} obj={x}></Reviewcard>)
                }
            </div>
            <button onClick={funHandle} className='shadow cardBtn rounded bg-fuchsia-700 hover:bg-fuchsia-800 p-3  mt-3  flex subpixel-antialiased'>see more</button> 
        </div>
    );
};

export default Home;