import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { BlogDetailData } from './DummyData'
import { Share2 } from 'react-feather'
import ShareModel from './Modal/ShareModel'

const BlogDetailPage = () => {
    const [share, setShare] = useState(false)
    const toggleShare = () => {
        setShare((preState) => !preState)
    }

    //=================== main_return_function ===============//
    return (
        <Fragment>
            <div className='HomePage_body ' >
                <Container >
                    <Row className='Main_Blog_Section'>
                        <Col md={9}>
                            <div className='BlogDetail_Main_Blk '>
                                <p className="my-4">Top Mobile App Development Trends for 2022</p>
                                <p className="DetailBlog_SubHeading ">Top Mobile App Development Trends for 2022</p>
                                <div className='BlogDetail_Img_Section'>
                                    <img src='https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg' alt='blog-img' className='img-fluid' />
                                </div>
                            </div>
                            <div className='Bolg_Detail_Description my-4'>
                                <p>
                                    The continuous growth in mobile app technology is <strong>ever-lasting</strong> and <strong>non-stoppable</strong>. Mobile apps are no more a necessity but a demand of the masses. Businesses are now immensely working on the development of mobile apps for attracting their customers.

                                    Today your mobile has an answer for your every need and query. The demand of the consumer is increasing and they are eagerly waiting for the latest mobile development.

                                    It's not surprising that the general masses are also so curious to learn the new <strong>latest mobile app trends</strong>. Here, we are going to talk and discuss the latest mobile app development trends in the upcoming 2022.

                                    <strong>Listing Top Mobile App Development Trends In 2022</strong>
                                    This year we are witnessing so many new <strong>mobile app development trends</strong> . Below is the list of the same: -<br />
                                    {
                                        BlogDetailData.map((data) => (
                                            <div>
                                                <strong>{data.DescpHeadingOne}: -</strong>{data.DescpHeadingOneIntro}
                                                <br />
                                            </div>
                                        ))
                                    }
                                </p>
                                <Button
                                    onClick={toggleShare}
                                    className='mt-3'
                                    outline
                                    color='primary'
                                >
                                    <Share2 size={20} /> SHARE
                                </Button>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='BlogDetail_LeftHeading w-100'>
                                <p className="my-4">RECENT POST</p>
                                <div className=" my-4 BlogDetail_Crad_Right">
                                    <img src="https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg" alt="" />
                                    <div className='ml-3'>
                                        <p > Top Mobile App Development Trends for 2022</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>


                </Container>
                {/*=============== Start_Share_Modal_Section ============*/}
                <ShareModel
                    toggleShare={toggleShare}
                    share={share}
                    link="https://aaragroups.com/blogdetails/2/top-mobile-app-development-trends-for-2022"
                />
                {/*=============== End_Share_Modal_Section ==============*/}
            </div>

        </Fragment>
    )
}

export default BlogDetailPage
