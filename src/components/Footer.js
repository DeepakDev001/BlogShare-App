import React, { Fragment } from 'react'
import { FooterData } from './DummyData'

const Footer = () => {

    //============== main_return_function ===============//
    return (
        <Fragment>
            <div className='Footer_Section'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='Footer_Block_Section gap-1'>
                        {
                            FooterData.map((data) => (
                                <div className='Img_Blk_Section rounded-circle shadow-lg'>
                                    <img src={data.src} alt='icon-img' className='img-fluid' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" Footer_Bottom_Content pb-3">
                    <p>© 2021 AaraGroups | All Rights Reserved.</p>
                    <p className=" pl-4" style={{ color: "#3B82F6" }}> Privacy Policy</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
