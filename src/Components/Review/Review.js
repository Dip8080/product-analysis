
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Reviewcard from '../ReviewCard/Reviewcard';

const Review = () => {
  const [reviews,setReview] = useReview(); 
  

    return (
        <div>
            <h1 className='p-3 shadow-xl flex justify-center text-3xl'>customers review({reviews.length})</h1>
            <div className='p-5'>
                {
                    reviews.map(x=><Reviewcard obj={x} key={x.id} > </Reviewcard>)
                }
            </div>
          
        </div>
    );
};



export default Review;