import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {

    const [posts, setPosts] = useState([]);
    const date = new Date();

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=565049e1f5da4391b92a464c5df76bb9`)
            .then(res => res.json())
            .then(data => setPosts(data?.articles))

    }, [date])
    // console.log(posts);

    return (
        <div>
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden min-h-screen">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Be on
                            <span className="text-5xl sm:text-7xl">
                                Time
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                            Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
            <div className='px-12'>
                <h1 className='text-center lato-bold py-14 text-3xl'> New Blogs </h1>
                <div className='flex flex-col gap-10'>
                    {
                        posts.map((post, index) =>
                            <Link to={post.url} key={index + 1} className='flex justify-start items-start gap-10 hover:shadow-lg p-2'>
                                <div className='2/6'>
                                    <img src={post?.urlToImage} alt="" className='w-96 h-80' />
                                </div>
                                <div className='w-4/6'>
                                    <h1 className='text-2xl lato-bold'> {post?.title} </h1>
                                    <p className='text-lg lato-regular'> {post?.description} </p>
                                    <p className='text-lg lato-regular'> {post?.author} </p>
                                    <p className='text-lg lato-regular'> {post?.publishedAt} </p>
                                    <a href={post.url} className='text-primary lato-regular'> Read More </a>
                                </div>
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;