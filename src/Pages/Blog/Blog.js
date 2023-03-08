import React from 'react';

const Blog = () => {
    return (
        <div className='my-24 md:max-w-[1280px] mx-auto'>
            <h1 className='text-2xl'>1. What are the different ways to manage a state in a React application?</h1>
            <p className='mt-3 justify'><span className=' text-white px-3 mr-2 bg-red-500 text-xl'>Ans: </span>In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
            <h1 className='text-2xl'>2. How does prototypical inheritance work?</h1>
            <p className='mt-3 justify'><span className=' text-white px-3 mr-2 bg-red-500 text-xl'>Ans: </span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object.</p>
            <h1 className='text-2xl'>3. What is a unit test? Why should we write unit tests?</h1>
            <p className='mt-3 justify'><span className=' text-white px-3 mr-2 bg-red-500 text-xl'>Ans: </span>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            <h1 className='text-2xl'>4. React vs. Angular vs. Vue?</h1>
            <p className='mt-3 justify'><span className=' text-white px-3 mr-2 bg-red-500 text-xl'>Ans: </span>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
    );
};

export default Blog;