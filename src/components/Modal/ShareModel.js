import React, { Fragment, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const ShareModel = ({ share, toggleShare, link }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
    };
  

    //============== main_return_function ==================//
    return (
        <Fragment>
            {!share === false &&
                <Modal isOpen={share} toggle={toggleShare} className='modal-dialog-centered creation_modal_blk' >
                    <ModalBody>
                        <div className='Share_Blog_Link_Section'>
                            <img src='https://aaratechblog.s3.amazonaws.com/media/blog_images/f_WkcfVRv.jpeg' alt='blog-img' className='img-fluid' />
                            <p className='ml-3'>{link}    {copied && <span  className='text-primary'>Link copied!</span>}</p>
                        </div>
                        <hr className='text-muted w-100' />
                        <div className='Modal_Content_Blk '>
                            <div className='Icon_Blk_Btn border shadow' >
                                <CopyToClipboard text={link} onCopy={handleCopy} >
                                    <ContentCopyIcon />
                                </CopyToClipboard>
                                <p>copy</p>
                            </div>
                            <div className='Icon_Blk_Btn border shadow' >
                                <WhatsappShareButton url={"https://web.whatsapp.com/"}> <WhatsAppIcon color='success' /></WhatsappShareButton>
                                <p>WhatsApp</p>
                            </div>
                            <div className='Icon_Blk_Btn border shadow' >
                                <FacebookShareButton url={"https://www.facebook.com/login"}> <FacebookIcon color='primary' /></FacebookShareButton>
                                <p>Facebook</p>
                            </div>
                            <div className='Icon_Blk_Btn border shadow' >
                                <TwitterShareButton url={"https://twitter.com/"}> <TwitterIcon color='primary' /></TwitterShareButton>
                                <p>Twitter</p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            }
        </Fragment>
    )
}

export default ShareModel
