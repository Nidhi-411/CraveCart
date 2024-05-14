
import Image from "../utils/about1.jpeg"
const About = ()=>{
  return(
    < div className='container-max py-16  text-center min-h-[80vh]'>
        <img
          src={Image}
          alt='hi'
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'> Crave Cart </h1>

          <div className='container-max text-center  ' >
         CraveCart ❤ , made by{' '}
        <a
          href='https://github.com/Nidhi-411'
          target={'_blank'}
          className='text-blue-500'
        >
          👩‍🍳 Nidhi Yadav
        </a>
      </div>

         

          <p>
            A food ordering web application built with React.js ⚛ , Tailwind CSS , Redux Toolkit.
            
          </p>
          <p> I have used Swiggy's Api for fetching data</p>
          <p> I have provided authentication using firebase</p>
        </div>
      </div>
  )
}
export default About;