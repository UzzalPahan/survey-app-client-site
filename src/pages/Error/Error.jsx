import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-8">
        <h2 className="text-6xl">404 page not found</h2>
        <Link className="text-red-400 text-4xl underline hover:text-red-500" to={'/'}>Back to home</Link>
    </div>
  )
}

export default Error