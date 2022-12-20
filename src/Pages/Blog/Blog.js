import React, { useState } from 'react';

const Blog = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className='space-y-10 my-10'>
    <div className="">
	<div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-accent text-secondary relative`}>
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Dec 20, 2022</span>
			
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" className="text-2xl font-bold hover:underline">What is the Difference between SQL and NoSQL?</p>
			<p className="mt-2"><span className='text-primary'>SQL:</span> <br />Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries</p>
                        <p className="mt-2"><span className='text-primary'>NoSQL:</span> <br />SQL is Relational Database Management System. SQL databases have fixed or static or predefined schema. SQL databases have fixed or static or predefined schema. SQL databases are best suited for complex queries</p>
                        
                        <div className='bg-gradient-to-b from-transparent to-white w-full h-10px absolute bottom-0'></div>
		</div>
		
	</div>
</div>
            
{/* Blog 2 */}

    <div className="">
	<div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-accent text-secondary relative`}>
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Dec 20, 2022</span>
			
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" className="text-2xl font-bold hover:underline">What is JWT, and how does it work?</p>
			<p className="mt-2">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                        
                        <div className='bg-gradient-to-b from-transparent to-white w-full h-10px absolute bottom-0'></div>
		</div>
		
	</div>
</div>

            
    <div className="">
	<div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-accent text-secondary relative`}>
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Dec 20, 2022</span>
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS?</p>
			<p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                        
                        <div className='bg-gradient-to-b from-transparent to-white w-full h-10px absolute bottom-0'></div>
		</div>
		
	</div>
</div>
    <div className="">
	<div className={`container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-accent text-secondary relative`}>
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-400">Dec 20, 2022</span>
			
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" className="text-2xl font-bold hover:underline">How does NodeJS handle multiple requests at the same time?</p>
			<p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                        
                        <div className='bg-gradient-to-b from-transparent to-white w-full h-10px absolute bottom-0'></div>
		</div>
		
	</div>
</div>
        </div>
    );
};

export default Blog;