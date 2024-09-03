import Image from 'next/image'

export default function Project ({image, name, description, url, github}) {
  return (
    <div className="w-96 text-base md:text-lg lg:text-xl font-light">
      <Image src={image} alt={name} />
      <div className="">
        <h2 className="text-lg md:text-xl lg:text-2xl text-neutral-900 dark:text-white font-medium">{name}</h2>
        <h3 className="">{description}</h3>
        <div className="flex gap-4">
          <a href={url} className="border-b-2 border-neutral-100 dark:border-neutral-900 hover:border-neutral-900 dark:hover:text-white dark:hover:border-neutral-50" target="_blank" rel="noreferrer">Website</a>
          <a href={github} className="border-b-2 border-neutral-100 dark:border-neutral-900 hover:border-neutral-900 dark:hover:text-white dark:hover:border-neutral-50" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  )
}