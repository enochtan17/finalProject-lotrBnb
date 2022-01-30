import React from 'react'
import gitLogo from '../../zzimages/git.png'
import linkedIn from '../../zzimages/linkedInLogo.webp'
import lonelyMtn from '../../zzimages/lonely-mtn.jpeg'
import haradwaith from '../../zzimages/haradwaith.webp'
import anfalas from '../../zzimages/anfalas.jpeg'
import blueMtn from '../../zzimages/blue-mtn.jpeg'
import './outsideHome.css'

const OutsideHome = () => {

    return (
        <>
            <div className='photo-body'>
                <h1>Not sure where to go?</h1>
            </div>
            <div className='inspiration-header'>
                <h1>Inspiration for your next trip</h1>
            </div>
            <div className='inspiration-boxes'>
                <div className='inspire-box1'>
                    <img src={lonelyMtn} alt=''></img>
                    <h3>The Lonely Mountain</h3>
                    <p>397 miles away</p>
                </div>
                <div className='inspire-box2'>
                    <img src={haradwaith} alt=''></img>
                    <h3>Haradwaith</h3>
                    <p>968 miles away</p>
                </div>
                <div className='inspire-box3'>
                    <img src={anfalas} alt=''></img>
                    <h3>Anfalas</h3>
                    <p>247 miles away</p>
                </div>
                <div className='inspire-box4'>
                    <img src={blueMtn} alt=''></img>
                    <h3>Blue Mountains</h3>
                    <p>45 miles away</p>
                </div>
            </div>
            <hr className='hr-line'></hr>
            <h3 className='about-header'>About</h3>
            <div className='about-links'>
                <a href='https://github.com/enochtan17/' target="_blank" rel="noreferrer" className='gitlink'>
                    GitHub <img src={gitLogo} className="gitlogo" alt=''/>
                </a>
                <a href="https://www.linkedin.com/in/enoch-tan-2a3478112/" target="_blank" rel="noreferrer" className='linkedinlink'>
                    LinkedIn <img src={linkedIn} className='linkedinlogo' alt=''/>
                </a>
                <div className='copyright'>
                    <img src="https://img.icons8.com/small/16/000000/copyright.png" alt=''/> 2022 Middle Earth BBnB, Inc
                </div>
            </div>
        </>
    )
}

export default OutsideHome
