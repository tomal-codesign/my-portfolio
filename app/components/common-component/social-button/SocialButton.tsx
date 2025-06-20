import { Icon } from '@iconify/react';
import { useEffect } from 'react';

type props = {
  icon: string
  text: string
  iconColor: string
  hoverColor: string
  link: string
}
const SocialButton = ({ icon, text, iconColor, hoverColor, link }: props) => {
  // const bgClass = `bg-${color}`;
  // const hoverClass = `hover:bg-${color}`;

  return (
    <>
      <a href={link} className={`flex items-center gap-2 bg-[#fff]/70 py-2 pl-2 pr-5 rounded-full text-[var(--normal-text)] ${hoverColor} hover:text-white group`}>
        <span className={`w-8 h-8 flex justify-center items-center ${iconColor} text-white transition-colors duration-400  group-hover:bg-[#fff]/26 group-hover:text-white rounded-full`}>
          <Icon icon={icon} width="24" height="24" />
        </span>
        {text}
      </a>
    </>
  )
}

export default SocialButton