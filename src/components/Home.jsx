import '/src/styles/home.css'
const Home = () => {
  return (
    <div className="flex mb-20">
      <div className="w-1/2 ml-8">
        <h1 className="mt-28 font-bold text-5xl">What is Remote Hub?</h1>
        <p className='text-xl '>Remote Hub is the go-to destination for finding and listing incredible remote jobs. It boasts the largest remote work community globally, attracting 4.5 million visitors. Whether you’re looking for full-time positions or freelance work, this platform has you covered.</p>
        < a href='/job'>
          <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 ml-20 text-2xl my-7 font-bold">Get Started</button></a>
        < a href='/contact'>
          <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 text-2xl font-bold object-contain">Contact Us</button></a></div>
      <div className='w-1/2 h-9 ml-12 mt-4 mb-5 mt-24'>
        <img src='https://media.licdn.com/dms/image/D4D12AQHbWmvLqxpiuw/article-cover_image-shrink_720_1280/0/1691511597324?e=1720051200&v=beta&t=6SgF0pJeIXzNvWIKKnV2dYjUthKWWj4OgxdA2mLqgeg' className='mx-auto object-contain md:object-scale-down flex h-auto max-w-lg mt-20 md:grid-cols-2' ></img></div>
    </div>
  )
}

export default Home;