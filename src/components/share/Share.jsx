import React from 'react'
import "./share.css"
import MmsIcon from '@mui/icons-material/Mms';
import LabelIcon from '@mui/icons-material/Label';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                <input type="text" name="" id="" className='shareInput' placeholder="what's in your mind ?"/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
            <div className='shareOptions'>
                <div className="shareOption">
                    <MmsIcon className='shareIcon' htmlColor='tomato'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon className='shareIcon' htmlColor='blue'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <FmdGoodIcon className='shareIcon' htmlColor='green'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <SentimentSatisfiedAltIcon className='shareIcon' htmlColor='goldenrod'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
               </div>
               <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
