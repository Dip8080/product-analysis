import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 shadow-md'>
            <h1 className='mt-4 text-2xl shadow-inner  p-4 subpixel-antialiased'>what is symantic tag ?</h1>
            <p className='my-3 shadow-2xl p-5 subpixel-antialiased'>at first we have to understand what is a non-symantic tag . a non-symantic tag basically is a
an html element which tells nothing about the content or does not have any meaning like div,
h1-h6 , p etc . on the other hand a symantic tag is an element which has a meaning and clearly 
defines it's content like header , article , nav , article etc .
</p>
            <h1 className='text-2xl mt-4 shadow-inner  p-4 subpixel-antialiased'>
inline element vs block element:</h1>

<p className='mt-3 shadow-2xl p-5 subpixel-antialiased'>so every html element has a default display value block and inline . Block-level element
like div , h1, Header etc always start on a new line and browser automatically add some spaces
before and after the element and also take the full width available . on the other hand
an inline does start on a new line and it will takes up as much width as newcessary.</p>
        </div>
    );
};

export default Blog;