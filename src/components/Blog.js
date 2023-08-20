import React, { Fragment, useState } from 'react'
import { Share2 } from 'react-feather'
import { Button, Card, Col, Container, Row } from 'reactstrap'
import ShareModel from './Modal/ShareModel'
import { useNavigate } from 'react-router-dom'


const Blog = () => {
    const navigate = useNavigate();
    const [share, setShare] = useState(false)
    const toggleShare = () => {
        setShare((preState) => !preState)
    }
    const ReadUpdate = () => {
        navigate("/BlogDetailPage");
    }
    //================== main_return_function ==================//
    return (
        <Fragment>
            <Container >
                <div className='Blog_Main_Blk'>
                    <h1>Blog</h1>
                    <p >Our Few Blogs are Presented Here</p>
                </div>
                <Row className='mt-4 Main_Blog_Section'>
                    <Col md={8}>
                        <Card className='p-3 shadow '>
                            <div className='Card_Detail_blk'>
                                <img src='https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg' alt='blog-img' className='img-fluid' />
                                <div className='Detail_Margin_blk'>
                                    <div className='d-flex gap-2'>
                                        <div className='Erp_tag'>
                                            ERP
                                        </div>
                                        <div className='Erp_tag'>
                                            2023-02-22T07:42:43
                                        </div>
                                    </div>
                                    <p className="py-1">Top Mobile App Development Trends for 2022</p>
                                    <p className="Blog_Desp">
                                        The continuous growth in mobile app  technology is ever-lasting
                                        &amp;
                                        non-stoppable. Mobile apps are no more a necessity but a demand of the masses. Businesses are now immensely working on..
                                    </p>
                                    <p className='Blog_Read_event' onClick={ReadUpdate} >Read More...</p>
                                </div>
                            </div>
                        </Card>
                        <Button
                            onClick={toggleShare}
                            outline
                            color='primary'
                            className='w-100 mt-3'
                        ><Share2 size={20} /> SHARE
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Card className='p-3 shadow border Card_Grid_Blk'>
                            <p className="pb-4 Recent_Heading">Recent Posts</p>
                            <div className='Card_Recent_Blk shadow'>
                                <img src='https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg' alt='blog-img' className='img-fluid' />
                                <div className='Recent_detail_blk '>
                                    <p className='p-2'>
                                        Top Mobile App Development, Mobile App Development Trends, Top Mobile App Development Company
                                    </p>
                                    <p className="Recent_Tym_Zone p-2">2023-02-22T07:42:43</p>
                                    <p class="Recent_Read_btn p-2" onClick={ReadUpdate}>Read More...</p>
                                </div>



                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
            {/*=============== Start_Share_Modal_Section ==============*/}
            <ShareModel
                toggleShare={toggleShare}
                share={share}
                link="https://aaragroups.com/blog"
            />
            {/*=============== End_Share_Modal_Section ================*/}
        </Fragment>
    )
}

export default Blog
