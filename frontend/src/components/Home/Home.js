import React from 'react'
import Nav from '../Nav/Nav'
import "./Home.css"
const Home = () => {
    return (
        <div className='home-container'>
            <Nav />
            <div className='blog-lists'>
                <ul>
                    <li className='blog'>
                        <h2 className='title'>Titel</h2>
                        <div>
                        <span className='auther'>by Auther</span>
                        <span className="date">Date</span>
                        </div>
                        <div className="description">
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, mollitia magnam fugiat quae ad quo accusantium earum molestias illum corporis.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
