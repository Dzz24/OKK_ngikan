import {
    FigmaIcon,
    Code2Icon,
    Box
} from 'lucide-react'


const icons={
    figma : <FigmaIcon color='white' />,
    code : <Code2Icon color='white' />,
    box : <Box color='white' />
}
export default function FeatureCard({
    title,
    desc,
    icon,
}) {
  const valid = icon in icons
  const selectIcon = valid?icons[icon] : ""

  return (
    <div className='rounded-md p-8 bg-gray-800 bg-opacity-35  flex flex-col gap-4 items-start'>
       <div className='bg-gray-600 bg-opacity-25 p-2  rounded-md'>
          {selectIcon}
        </div> 
        <figcaption>
      <h1 className='text-lg font-bold text-white mb-1'>{title}</h1>
      <p className='text-gray-500 text-md'>{desc}</p>
        </figcaption>
    </div>
  )
}
