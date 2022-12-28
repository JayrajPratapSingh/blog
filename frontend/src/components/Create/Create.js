import React from 'react'
import Nav from '../Nav/Nav'
import "./Create.css"
const Create = () => {
    return (
        <div className='create-container'>
            <Nav />
            <form action="" method='POST' className='post-form'>
                <input name="titel" type="text" placeholder='enter a title...' className="title"/>
                <br />
              <input type="file" name="image"/>
              <br />
              <textarea name="description" id="" cols="30" rows="10"></textarea>
              <br />
              <input type="submit" value="Post" className='post-btn'/>
            </form>
        </div>
    )
}

export default Create
