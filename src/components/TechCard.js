import Image from 'next/image'

export default function TechCard ({name, src}) {
  return (
    <div>
      <Image alt={name} src={src} height={100} width={100}/>
    </div>
  )
}
