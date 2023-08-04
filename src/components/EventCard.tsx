import data from '@/utils/data'

interface Props {
  event: {
    title: string
    description: string
    photo: string
  }
}

const EventCard = ({ event }: Props) => {
  return (
    <div className="w-full rounded-lg bg-gray-900 my-10 p-4 lg:p-10 flex flex-col lg:flex-row">
      <img
        src={event.photo}
        alt={event.title}
        className="rounded-lg w-full lg:w-1/2 h-full object-cover"
      />
      <div className="lg:ml-5">
        <div className="font-bold text-base lg:text-lg mb-4 mt-3 lg:mt-0 lg:mb-10">{event.title}</div>
        <div className="text-sm lg:text-base">{event.description}</div>
      </div>
    </div>
  )
}

export default EventCard
