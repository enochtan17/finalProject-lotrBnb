import React from 'react'
import { useSelector } from 'react-redux'
import gitLogo from '../../zzimages/git.png'
import linkedIn from '../../zzimages/linkedInLogo.webp'
import './outsideHome.css'

const OutsideHome = () => {
    const userState = useSelector(state => state.session.user)

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
                    <img src='https://www.thetolkienforum.com/wiki-asset/?pid=574&d=1628070498'></img>
                    <h3>The Lonely Mountain</h3>
                    <p>397 miles away</p>
                </div>
                <div className='inspire-box2'>
                    <img src='https://i.cbc.ca/1.4833082.1537541336!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/the-elephant-queen.jpg'></img>
                    <h3>Haradwaith</h3>
                    <p>968 miles away</p>
                </div>
                <div className='inspire-box3'>
                    <img src='https://images.ctfassets.net/gxwgulxyxxy1/8nojt8Yx1FdbzrwGzikPr/62ac4bb39dd0cd788b011fbaf9cf423b/1073528888.jpg?fm=jpg&w=1200'></img>
                    <h3>Anfalas</h3>
                    <p>247 miles away</p>
                </div>
                <div className='inspire-box4'>
                    <img src='http://tolkiengateway.net/w/images/thumb/e/e8/Rob_Alexander_-_Blue_Mountain_Dwarf_Hold.jpg/250px-Rob_Alexander_-_Blue_Mountain_Dwarf_Hold.jpg'></img>
                    <h3>Blue Mountains</h3>
                    <p>45 miles away</p>
                </div>
            </div>
            <hr className='hr-line'></hr>
            <h3 className='about-header'>About</h3>
            <div className='about-links'>
                <a href='https://github.com/enochtan17/' target="_blank" class='gitlink'>
                    GitHub <img src={gitLogo} class="gitlogo"/>
                </a>
                <a href="https://www.linkedin.com/in/enoch-tan-2a3478112/" target="_blank" class='linkedinlink'>
                    LinkedIn <img src={linkedIn} class='linkedinlogo'/>
                </a>
                <div className='copyright'>
                    <img src="https://img.icons8.com/small/16/000000/copyright.png"/> 2022 Middle Earth BBnB, Inc
                </div>
            </div>
        </>
    )
}

export default OutsideHome
