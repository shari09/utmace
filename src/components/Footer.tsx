import Link from 'next/link'

const Footer = () => {
  return (
    <div className="text-gray-300 text-xs lg:text-sm mr-auto h-16 mt-32 lg:px-32 px-8">
      <hr className="border-gray-400" />
      <p className="mt-2">
        © UTM ACE 2023 | Website designed and engineered by{' '}
        <Link href="https://www.linkedin.com/in/shari-sun/" className="text-blue-600" target="_blank">Shari Sun</Link>
        {' '}: )
      </p>
    </div>
  )
}

export default Footer
