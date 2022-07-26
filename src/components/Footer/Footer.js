import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full bg-violet-800 py-6 px-0'>
        <div className='m-auto grid grid-cols-4'>
            <div className='w-full h-full flex flex-col p-4'>
               <div className='flex mb-2'>
                 <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                 <div>
                 <p>Maryland, Lagos</p>
                 <p>Nigeria</p>
                 </div>
               </div>
               <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    234-903-237-0716
                </h4>
               
               </div>
               <div className='phone'>
                <h4>
                <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                valentinabuoro4@gmail.com
              
                </h4>
               
               </div>


            </div>
            <div className='right'>
                <h4>
                    About Me
                </h4>
                <p>
                    I am a passionate frontend engineer that is committed to
                     providing business solutions for your company
                </p>
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}} />
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}} />
                <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer