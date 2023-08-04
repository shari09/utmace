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
    <div className="w-full rounded-lg bg-gray-900 my-10 p-10 flex flex-row">
      <img
        src={event.photo}
        alt={event.title}
        className="rounded-lg w-1/2 h-full object-cover"
      />
      <div className="ml-5">
        <div className="font-bold text-lg mb-10">{event.title}</div>
        <div className="">{event.description}</div>
      </div>
    </div>
  )
}

export default EventCard
