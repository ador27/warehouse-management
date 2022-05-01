import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>Difference between javascript and nodejs</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-xl'>JavaScript</h3>
                    <p>1. JavaScript is the world's most popular programming language.</p>
                    <p>2. JavaScript is the programming language of the Web.</p>
                    <p>3. JavaScript is easy to learn.</p>
                    <h3 className='text-xl'>Node.js</h3>
                    <p>1. Node.js is an open source server environment.</p>
                    <p>2. Node.js uses JavaScript on the server.</p>
                    <p>3. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).</p>

                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>When should you use nodejs and when should you use mongodb</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-xl'>Use node.js</h3>
                    <p>When I see the advantages of “JavaScript everywhere”. Yes, this is the most revolutionary thing about Node.js it is the first-ever environment supporting JavaScript both client-side and server-side. Easy learning curve. Knowing JavaScript gives a developer a good start with Node.js. Of course, you need to know the backend development principles, however, the knowledge of the programming language will simplify things a lot.</p>
                    <h3 className='text-xl'>Use mongodb</h3>
                    <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it's a document database, also called a document-oriented database or a document store.</p>

                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>Differences between sql and nosql databases.</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-xl'>SQL</h3>
                    <p>1. SQL databases are vertically scalable.</p>
                    <p>2. SQL databases are table-based.</p>
                    <p>3. SQL databases are better for multi-row transaction.</p>
                    <h3 className='text-xl'>NoSQL</h3>
                    <p>1.  NoSQL databases are horizontally scalable.</p>
                    <p>2. NoSQL database are document.</p>
                    <p>3. NoSQL is better unstructured data like documents or JSON.</p>

                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>What is the purpose of jwt and how does it work</h1>
                <div className='text-left pl-10'>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.</p>


                </div>
            </div>


        </div>
    );
};

export default Blogs;