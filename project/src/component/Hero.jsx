import React, { useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from "react-icons/ti";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Hero = () => {

    // defining all the states
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedvideos] = useState(0)

    const totalVideos = 4
    const nextVideoRef = useRef(null)
    const currentVideoRef = useRef(null)
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1

    // to ensure how many videos are loaded 
    const handelVideoLoad = () => {
        setLoadedvideos(upcomingVideoIndex)
    }

    // aftr being clicked it wil increase the index to let other video play
    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }
    // this is to get the videos by indexes 
    const getVideoSource = (index) => `videos/hero-${index}.mp4`;

    // Using Gsap
   useGSAP(()=>{


       if (hasClicked ) {

           
           gsap.to('#next-video' , {
               transformOrigin : 'center center',
               scale:1,
               width:'100%',
               height:'100%',
               duration:1,
               ease:'power1.inOut',
               onStart:()=> nextVideoRef.current.play(),
            })
            gsap.set('#next-video', { visibility: 'visible' })
            
            gsap.from('#current-video' , {
                transformOrigin:'center center',
                scale:0,
                duration:1.5,
                ease:'power2.inOut',
                
            })
        }
        
    },[currentIndex])
    
    
    

    return (
        // Main div for hero section 
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {/* background video will be played in this div */}
            <div id='video-frame' className="relative  z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                    <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                      {/* small video running */}
                        <video
                            ref={nextVideoRef}
                            src={getVideoSource(upcomingVideoIndex)}
                            loop
                            muted
                            id='current-video'
                            className='size-64 origin-center scale-150 object-cover object-center'
                            onLoadedData={handelVideoLoad}
                        />
                    </div>
                </div>
                {/* backgound video running  */}
                <video
                    ref={nextVideoRef}
                    src={getVideoSource(currentIndex)}
                    loop
                    muted
                    id='next-video'
                    className='absolute-center absolute invisible z-20 size-64 object-cover object-center'
                    onLoadedData={handelVideoLoad}
                />
                {/* this is initially when page oad so ther mst be something running on background */}
                <video
                    src={getVideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                    // autoPlay
                    loop
                    muted
                    className='size-full object-cover object-center absolute left-0 top-0'
                    onLoadedData={handelVideoLoad}
                />

                <h1 className='absolute z-40 special-font hero-heading bottom-5 right-5 text-blue-75 '>
                    G<b>a</b>ming
                </h1>

                <div className="absolute top-0 left-0 size-full z-40 ">
                    <div className="mt-25 px-5 sm:px-10 ">
                        <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>ed</h1>
                        <p className='mb-5 max-w-64 font-family-robert-regular text-blue-100'>Enter the Metagame Layer <br /> Unleash the play Economy</p>
                        <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClass='bg-yellow-300 flex-center gap-1' />
                    </div>
                </div>
            </div>
            <h1 className='absolute special-font hero-heading bottom-5 right-5 text-black '>
                G<b>a</b>ming
            </h1>
        </div>
    )
}

export default Hero