import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({weight: "400", subsets: ["latin"]});
const Footer = (props) => {
  return (
    <div className="flex justify-center p-8 border-t-[1px] border-neutral-600">
      <Link href="https://juanmarin.netlify.app/" target="_blank" className={`${lusitana.className} flex justify-center items-center text-neutral-900 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-50 text-base fill-neutral-900 dark:fill-gray-300 hover:fill-gray-400 dark:hover:fill-gray-50`} passHref>
        <p className="pt-[.5px]">Powered by&nbsp;&lt;</p><Logo className="fill-inherit" size={19} /><p className="pt-[.5px]">&gt;</p>
      </Link>
    </div>
  )
}
export default Footer;
