import '/src/styles/home.css'
const   Home = () => {
  return (
    <div class="home">
      <div class="homecontent">
      <h1 class="hh1">What is Remote Hub?</h1>
      <p class='pp1'>Remote Hub is the go-to destination for finding and listing incredible remote jobs. It boasts the largest remote work community globally, attracting 4.5 million visitors. Whether you’re looking for full-time positions or freelance work, this platform has you covered.</p>
      <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 ml-20 text-2xl my-7"><a href="/">Get Started</a></button>
      <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-large rounded-full text-sm px-9 py-5 text-center me-2 mb-2 dark:focus:ring-yellow-900 text-2xl "><a href="Contact.jsx">Contact Us</a></button></div>
      <img src='src\components\background.avif' class="imghome"></img>
    </div>
  )
  }

export default Home;