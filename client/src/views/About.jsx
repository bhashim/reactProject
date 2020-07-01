import React from 'react';
import GlassKeep_Logo from '../GlassKeep_Logo.jpg';

export default function About() {
    return (
        <div>
            <img src={GlassKeep_Logo} alt="GlassKeep_Logo" width={300} />
            <h1 style={{ color: 'blue' }}><u>How it all started</u></h1>
            <p style={{ color: 'blue' }}>It was Christmas 2015 and I was in 10th grade. My dad had just started wearing reading glasses and kept losing them. He would ask for my help in looking for the glasses. It got to the point where I was tired of helping and set out to find a permanent solution to the problem. I realized that he had a button on his shirt so I came up with a simple cardboard model that would allow him to hang his eye glasses from his shirt button. He was very impressed with my creativity and helped me file for a patent. This is how GlassKeep came to life. I spent sometime searching for different names that could work and finally settled on GlassKeep because the name clearly describes the function.<p2 style={{ color: 'blue' }}><b>GlassKeep - A place to keep your glasses!</b></p2></p>
            <p3 style={{ color: 'blue' }}>Everyone who tries GlassKeep really likes it. I have talked to many people about GlassKeep and shown them how simple it is to use. Best of all I make GlassKeep right here in Michigan USA with 100% American made materials!</p3>
        </div>
    )
}