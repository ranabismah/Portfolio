import Link from "next/link";
import{ FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

const socials =[
{icon:<FaGithub />, path:"https://github.com/ranabismah"},
    {icon:<FaLinkedinIn />, path:"https://www.linkedin.com/in/rana-bisma-qasim-537bab2bb"},
    {icon:<MdEmail />, path:"mailto:ranabismah178@gmail.com"},
]

const Social = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) =>{
        return(
            <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
            </Link>
        );
    })}
    </div>
  )
}

export default Social
