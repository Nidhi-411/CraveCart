
import Image from "../utils/about1.jpeg"
const About = ()=>{
  return(
    <div className='container-max py-16  text-center min-h-[80vh]'>
        <img
          src={Image}
          alt='hi'
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'> Crave Cart </h1>

          <p>
            A food ordering web application built with React.js ⚛ , Tailwind CSS , Redux Toolkit , Firebase Authentication 
            
            Swiggy's API.
          </p>
        </div>
      </div>
  )
}
export default About;