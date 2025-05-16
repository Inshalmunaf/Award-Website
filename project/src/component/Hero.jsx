import React, { useRef, useState } from 'react'

const Hero = () => {

    // defining all the states
    const [currrentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedvideos] = useState(0)

    const totalVideos = 4
    const nextVideoRef = useRef(null)

    // aftr being clicked it wil increase the index to let other video play
    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex((prev) => { prev + 1 })
    }
    // this is to get the videos by indexes 
const getVideoSource = (index) => `videos/hero-${index}.mp4`;
    
    return (
        // Main div for hero section 
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {/* background video will be played in this div */}
            <div id='video-frame' className="relative  z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                    <div onClick={handleMiniVdClick} className="origin-center">
                        <video
                            ref={nextVideoRef}
                            src= {getVideoSource(currrentIndex +1)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero