interface props {
  children?: React.ReactNode
}

const Card = ({ children }: props) => {
  return (
    <div className='p-4 m-4 rounded-2xl bg-slate-950 shadow-xl'>
      {children}
    </div>
  )
}

export default Card;