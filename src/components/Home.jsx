import '/src/styles/home.css'
const   Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2 ml-8">
      <h1 className="mt-28 font-bold text-5xl">What is Remote Hub?</h1>
      <p className='text-xl '>Remote Hub is the go-to destination for finding and listing incredible remote jobs. It boasts the largest remote work community globally, attracting 4.5 million visitors. Whether you’re looking for full-time positions or freelance work, this platform has you covered.</p>
      <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 ml-20 text-2xl my-7 font-bold"><a href="/">Get Started</a></button>
      <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 text-2xl font-bold "><a href="Contact.jsx">Contact Us</a></button></div>
      <div className='w-1/2 ml-12 mt-4 mb-5 h-100 w-5000'>
      <img src='src\components\background.avif' className='h-auto max-w-lg' ></img></div>
    </div>
  )
  }

export default Home;