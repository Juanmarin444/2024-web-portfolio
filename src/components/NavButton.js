import Link from "next/link";

export default function NavButton ({text, href, myStyles, children, onClick}) {
    return (
        <div className="relative group">
            {href === undefined ? (
            <p onClick={onClick} className={`cursor-pointer flex text-neutral-900 dark:text-gray-300 items-center text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium px-1 border-b-2 border-neutral-100 hover:border-neutral-900 dark:border-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-50 ${myStyles}`}>
                {text}&nbsp;{children}
            </p> ):( 
            <Link href={`${href}`} className={`cursor-pointer flex text-neutral-900 dark:text-gray-300 items-center text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium px-1 hover:text-gray-400 dark:hover:text-neutral-50 ${myStyles}`}>
                {text}&nbsp;{children}
            </Link>
            )}
        </div>
    );
}