import NavBar from '@/components/Navbar';
import data from '@/utils/data'
import { parseGDriveUrl } from '@/utils/util'
import { SubHeading } from '../page';
import Footer from '@/components/Footer';


const Photo = ({ src, key }: { src: string; key: string }) => {

  return (
    <div className={`rounded-small w-[26vw] h-[18vw] flex-grow`} key={key}>
      <img src={parseGDriveUrl(src)} className={`rounded-lg object-cover w-full h-full`}/>
    </div>
  )
}

export default function Gallery() {
  const { gallery } = data
  return (
    <div>
      <NavBar nofade />
      <div className="lg:px-32 pt-16">
        <SubHeading text={gallery.title} />
        <div className="py-12">
          {gallery.description}
        </div>
        <div className="bg-black flex flex-wrap gap-6 justify-evenly">
          {gallery.content.map((item, i) => (<Photo src={item.photo} key={`gallery-${i}`} />))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
