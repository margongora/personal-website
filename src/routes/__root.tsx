import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Card from '../components/Card'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='sticky top-0 bg-[#242424] m-2 p-2 max-h-[20vh]'>
        <Card>
          <div className='text-center p-4 flex flex-row justify-between'>
            <Link to={'/portfolio'}>
              <span className='text-4xl text-white font-bold'>
                Portfolio
              </span>
            </Link>
            <Link to={'/'}>
              <span className="text-5xl text-rose-300 font-extrabold">
                Margo Gongora
              </span>
            </Link>
            <Link to={'/qualifications'}>
              <span className='text-4xl text-white font-bold'>
                Qualifications
              </span>
            </Link>
          </div>
        </Card>
      </div>
      <main className='flex flex-col'>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})