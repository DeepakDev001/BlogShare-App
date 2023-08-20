import React, { Fragment } from 'react'
import Blog from './components/Blog'

const Home = () => {

    //============== main_return_function ============//
    return (
        <Fragment>
            <div className='HomePage_body ' >
                <Blog />
            </div>
        </Fragment>
    )
}

export default Home
