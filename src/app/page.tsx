import NavBar from '@/components/Navbar'
import bg from '../../public/bg.jpg'
import data from '@/utils/data'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'

const Main = () => {
  return (
    <div className="w-full h-screen pt-48">
      <div
        className="w-full h-screen opacity-40 absolute left-0 top-0 z-0"
        style={{
          background: `linear-gradient(250.37deg, rgba(0, 0, 0, 0) 40.38%, #000000 101.3%), url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative lg:w-1/2 ">
        <h1 className="text-4xl lg:text-6xl font-bold">{data.main.title}</h1>
        <p className="text-base lg:text-xl mt-10">{data.main.description}</p>
      </div>
    </div>
  )
}

const SubHeading = ({ text }: { text: string }) => {
  return (
    <h2 className="text-4xl font-bold mb-10">{text}</h2>
  )
}

const Events = () => {
  return (
    <div className="w-full relative" id="events">
      <SubHeading text={data.events.title} />
      {data.events.data.map((event, i) => {
        return <EventCard event={event} key={`event-${i}`} />
      })}
    </div>
  )
}

interface AvatarProps {
  user: {
    name: string
    position: string
    photo: string
  }
}
const Avatar = ({ user }: AvatarProps) => {
  return (
    <div className="mx-4 lg:mx-10 my-4">
      <img src={user.photo} alt={user.name} className="rounded-full w-20" />
      <div className="text-center">
        <p className="font-bold">{user.name}</p>
        <p className="text-sm opacity-70">{user.position}</p>
      </div>
    </div>
  )
}
const About = () => {
  return (
    <div className="mt-20" id="about">
      <SubHeading text={data.about.title} />
      <div className="flex flex-row flex-wrap justify-evenly">
        {data.about.data.map((user, i) => {
          return <Avatar user={user} key={`user-${i}`} />
        })}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="px-8 lg:px-32 bg-black min-h-screen text-white">
      <NavBar />
      <Main />
      <Events />
      <About />
      <Footer />
    </div>
  )
}
