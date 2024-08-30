import Link from "next/link";
// import DropDownMenu from "@/src/components/UI/DropDownMenu";

export default function NavButton ({text, href, myStyles, dropDown, dropDownItems = [], dropDownStyles, children}) {
    return (
        <div className="relative group">
            {href === undefined ? (
            <p className={`cursor-pointer flex text-neutral-900 dark:text-gray-300 items-center text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium px-1 hover:text-gray-400 dark:hover:text-gray-100 ${myStyles}`}>
                {text}&nbsp;{children}
            </p> ):( 
            <Link href={`${href}`} className={`cursor-pointer flex text-neutral-900 dark:text-gray-300 items-center text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium px-1 hover:text-gray-400 dark:hover:text-gray-100 ${myStyles}`}>
                {text}&nbsp;{children}
            </Link>
            )}
            
            {/* {dropDown && (
                <DropDownMenu items={dropDownItems} dropDownStyles={dropDownStyles}/>
            )} */}
        </div>
    );
}