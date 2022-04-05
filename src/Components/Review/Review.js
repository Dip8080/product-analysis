
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';

const Review = () => {
  const [reviews,setReview] = useReview(); 

    return (
        <div>
            <h1 className=''>customers review({reviews.length})</h1>
            <div>
                {
                    reviews.slice(0,3).map(x=><Reviewsingle obj={x} key={x.id}></Reviewsingle>)
                }
            </div>
           <Link to={'/review'}> <button className='shadow cardBtn rounded bg-rose-700 hover:bg-rose-800 p-3  mt-3  flex subpixel-antialiased'>see more</button> </Link>
        </div>
    );
};

const Reviewsingle =(props)=>{
    const {name,comment,rating} = props.obj;
    return(
        <div className='p-4 my-3 shadow rounded flex justify-center'>
            <div>
            <h1>name : {name}</h1>
            <h1>comment : {comment}</h1>
            <h1>review : {rating}</h1>
            </div>

        </div>
    )
}

export default Review;