import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa"

import { profile } from "../../data/profile";

const iconClass =`
  w-11
  h-11
  rounded-full
  flex
  items-center
  justify-center
  bg-slate-800
  border
  border-slate-700
  hover:border-sky-400
  hover:text-sky-400
  transition
`;


function SocialLinks(){
    return(
        <div className="flex items-center gap-5 mt-10">
           {/*  <a  
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className={iconClass}
            >
                <FaGithub />               
            </a>
            <a 
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                  className={iconClass}
            >
                <FaLinkedin />
            </a>
            <a 
            href={`mailto:${profile.social.email}`}
              className={iconClass}
            >
                <FaEnvelope />
            </a> */}
        </div>
    );
}

export default SocialLinks;