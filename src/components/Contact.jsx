import { Link } from "react-router-dom"
import '/src/styles/home.css'

const   Contact = () => {
  return (
    <div className="max-w-md mx-auto bg-neutral-400 p-5 shadow-lg rounded-lg overflow-hidden mb-28 mt-9 font-bold ">
      <form action="https://formspree.io/f/mleqpger" method="POST" className="w-full max-w-lg text-center p-9 items-center" >
        <div  class="flex flex-wrap -mx-3 mb-6 items-center">
          <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0 items-center">
            <label for="exampleInputPassword1"  name="Name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">First Name :</label>
            <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="John" aria-label="name" required name="Name"/>
          </div>
          <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
            <label for="exampleInputPassword1"  name="Name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " >Last Name :</label>
            <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Doe" aria-label="name" required name="Name" />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label for="exampleInputEmail1" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3" placeholder="Your email...">Email :</label>
          <input type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="exampleInputEmail1" aria-describedby="emailHelp" required name="Message" placeholder="johndoe@gmail.com"/>
        </div>
          <div className="w-full md:w-1/2 px-1 md:mb-0">
            <label for="exampleInputPassword1"  name="country" className="mt-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Country :</label>
            <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Kenya" aria-label="First name" required name="fName"/>
          </div>
          </div>
          <div className="w-full md:w-2/8 px- md:mb-0">
          <label for="exampleFormControlTextarea1" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" name="Message">Subject :</label>
          <textarea id="exampleFormControlTextarea1" placeholder="Message..." rows="9" cols="9" required name="Text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
        </div>
  
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <button className="text-white bg-yellow-900 hover:bg-yellow-950 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-9 py-2.5 text-center me-2 mb-1 dark:focus:ring-yellow-900 mt-6 ml-20" type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}

export default Contact;