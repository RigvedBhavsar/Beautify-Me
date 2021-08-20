import React from 'react';
import aboutUs from '../images/aboutUs.jpg';
const About = () => {
    return (
        <section id="about">
            <div className="about-us">

                <div className="aboutleft">
                    <img src={aboutUs} className="arms" alt="pic"></img>
                </div>
                <div className="aboutright">
                    <b>Hi again,</b> Morgan here.&nbsp;&nbsp;💭 Thanks for checking out my website! I created it using React, Gatsby, Netlify,
                    and Contentful.
                    <br></br><br></br>
                    What am I doing now? I'm currently studying Software Engineering at Loyola University Chicago.
                    I'll be graduating in May of 2020, which is a year early. Cheers to getting sh*t done! At Loyola,
                    I serve as the President of the Computer Science Student Advisory Council. I guide a group
                    of 12 students to improve the CS department from within. Also, I
                    tutor other undergraduates for the department. I work as a web developer for the department as well,
                    updating and maintaining various web pages. I'm also the front-end lead for Software Systems
                    Laboratory, which is a research group that aims to incorporate STEAHM.
                    <br></br><br></br>
                    So yeah, I guess you could say I do a lot. But I like to stay busy. In January of this year I started
                    a tech blog, <a href="https://instagram.com/morgan.codes">@morgan.codes</a>. I've been documenting my journey as a developer on Instagram and in
                    short, the journey has been nothing but amazing. I've met amazing developers and have made
                    lifelong friends in the process.
                    <br></br><br></br>
                    <b>Let's make the world a better place with technology.</b>&nbsp;&nbsp;🧠
                </div>
            </div>
        </section>
    )
}

export default About
