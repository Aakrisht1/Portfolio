import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import Rotation from "./Rotation";
import { Typography } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiTailwindcss
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';

const Home = () => {
  return (
    <>
        <div className="iconRotate">
            <Canvas shadows camera={{ position: [0, 2, 4], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Experience />
            </Canvas>
            <div>
                <Rotation />
            </div>
        </div>
        <div className='bodyCont'>
            <div className="homeContainer">
                <Typography variant='h3'>TIMELINE</Typography>
                <TimeLine timelines={[1,2,3,4]} />
            </div>
            <div className="homeSkills">
                <Typography variant='h3'>SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src="/Icons/Mongo.png" alt="" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src="/Icons/Express.png" alt="" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src="/Icons/React.png" alt="" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src="/Icons/Node.png" alt="" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src="/Icons/Javascript.png" alt="" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src="/Icons/Tailwind.png" alt="" />
                    </div>
                </div>
                <div className="cubeShadow"></div>
                <div className="homeSkillsBox">
                    <SiCplusplus />
                    <SiReact />
                    <SiJavascript />
                    <SiMongodb />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiCss3 />
                    <SiHtml5 />
                    <SiTailwindcss />
                </div>
            </div>
            <div className="homeYoutube">
                <Typography variant='h3'>YOUTUBE VIDEOS</Typography>
                <div className="homeYoutubeWrapper">
                    <YoutubeCard image="https://wallup.net/wp-content/uploads/2019/09/480021-nature.jpg" title='Sample Video'/>
                    <YoutubeCard image="https://wallup.net/wp-content/uploads/2019/09/480021-nature.jpg" title='Sample Video'/>
                    <YoutubeCard image="https://wallup.net/wp-content/uploads/2019/09/480021-nature.jpg" title='Sample Video'/>
                    <YoutubeCard image="https://wallup.net/wp-content/uploads/2019/09/480021-nature.jpg" title='Sample Video'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
