interface props {
  children?: React.ReactNode
  icon: string,
  title: string,
  desc: string
}

const Project = ({ children, icon, title, desc }: props) => {
  return (
    <div className='m-2 p-2 flex flex-col text-center items-center bg-white rounded-2xl text-black gap-2'>
      <span
        className='font-bold m-4 h-[20%]'
      >{title}</span>
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