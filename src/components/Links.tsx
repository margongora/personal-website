import { GithubLogo, LinkedinLogo, Phone, Envelope } from '@phosphor-icons/react';

const Links = () => {
  return (
    <div className='bg-white m-4 p-4 rounded-2xl grid grid-cols-4 gap-3 justify-items-center'>
      <a className='hover:cursor-pointer' href='https://github.com/margongora'>
        <GithubLogo size={72} className='text-black' />
      </a>
      <a className='hover:cursor-pointer' href='https://linkedin.com/in/margongora'>
        <LinkedinLogo size={72} className='text-black' />
      </a>
      <a className='hover:cursor-pointer' href='tel://+19563937568'>
        <Phone size={72} className='text-black' />
      </a>
      <a className='hover:cursor-pointer' href='mailto://margongora0803@gmail.com'>
        <Envelope size={72} className='text-black' />
      </a>
    </div>
  )
}

export default Links