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
      <div className="relative w-1/2 ">
        <h1 className="text-6xl font-bold">{data.main.title}</h1>
        <p className="text-xl mt-10">{data.main.description}</p>
      </div>
    </div>
  )
}

const Events = () => {
  return (
    <div className="w-full relative">
      <h2 className="text-4xl font-bold">{data.events.title}</h2>
      {data.events.data.map((event, i) => {
        return <EventCard event={event} key={`event-${i}`} />
      })}
    </div>
  )
}

export default function Home() {
  return (
    <div className="px-32 bg-black min-h-screen text-white">
      <NavBar />
      <Main />
      <Events />
      <Footer />
    </div>
  )
}
