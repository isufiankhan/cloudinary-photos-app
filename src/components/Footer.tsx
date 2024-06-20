import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="w-full h-14 border-t flex justify-between items-center px-4 text-gray-300">
            <div className="text-base">
                Created by Sufian Khan
            </div>
            <div className="text-3xl flex gap-4">
                <Link href={"https://www.linkedin.com/in/sufiankhan108/"} className="hover:text-blue-600 duration-150" target="_blank">
                    <FaLinkedin />
                </Link>
                <Link href={"https://github.com/isufiankhan"} className="hover:text-purple-700 duration-150" target="_blank">
                    <FaGithub />
                </Link>
            </div>
        </div>
    )
}

export default Footer