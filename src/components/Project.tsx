import { Link } from "@phosphor-icons/react";

interface props {
  children?: React.ReactNode
  icon: string,
  title: string,
  desc: string,
  link?: string
}

const Project = ({ children, icon, title, desc, link }: props) => {
  return (
    <div className='m-2 p-2 flex flex-col text-center items-center bg-white rounded-2xl text-black'>
      <div className="flex flex-row m-2 gap-2">
        <span
          className='font-bold h-[20%]'
        >
          {title}
        </span>
        <a className={`hover:cursor-pointer ${link ? null : 'hidden'}`} href={link} >
          <Link />
        </a>
      </div>
      <p>{desc}</p>
      <img
        className='m-4 border-4 border-black rounded-full'
        src={icon} width={250} height={250}
      />
      <div className='flex flex-row gap-2'>
        {children}
      </div>
    </div>
  );
}

export default Project;