import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonial.css'
import profilePic1 from "../../img/user.png"
import profilePic2 from "../../img/user.png"
import profilePic3 from "../../img/user.png"
import profilePic4 from "../../img/user.png"
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import'swiper/css'

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat."
        },
    ]

    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className='t-heading'>
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>Form me...</span>
                <div className='blur t-blur1' style={{ background: "var(--purple)" }}></div>
                <div className='blur t-blur2' style={{ background: "skyblue" }}></div>
            </div>

            <Swiper 
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='testimonial'>
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
  

            </Swiper>
        </div>
    )
}

export default Testimonial
