import Intro from '../components/Intro'
import Card from '../components/Card'
import Links from '../components/Links'

export default function Home() {
  return (
    <>
      <Card>
        <Intro />
      </Card>
      <Card>
        <Links />
      </Card>
    </>
  )
}
