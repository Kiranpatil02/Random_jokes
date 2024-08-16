import { useState, useEffect } from 'react'
import profile from '/profile.jpg'
import tick from '/verified_lgxw8gryubt1.svg'
import chat from '/Vector (1).svg'
import repost from '/Vector (2).svg'
import like from '/Vector (3).svg'
import bookmk from '/Vector (4).svg'
import share from '/Vector (5).svg'




function App() {
  const [joke, setjoke] = useState("");
  const [rps,setrps]=useState(0)
  const [dil,setdil]=useState(0)
  const [book,setbook]=useState(0);
  const [comment,setcomment]=useState(0);
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
      .then((e) => e.json())
      .then((data) => {
        if (data.statusCode === 200) {
          console.log(data)
          setjoke(data.data.content);
        }
      })
      .catch((error) => console.error("Failed request", error));
      setrps(parseFloat((Math.random() * 5).toFixed(2)));
      setdil(parseFloat((Math.random()*10).toFixed(1)));
      setbook(parseFloat((Math.random()*3).toFixed(1)));
      setcomment(Math.floor(Math.random() * (500 - 100 + 1)) + 100);
  }, []);



  return (
    <>
      <div className='border-2 border-black text-white bg-black h-80 w-2/5 mx-auto my-40 rounded-xl p-1' >
        <div className='flex items-center'>
          <span className='text-3xl ml-3 hover:cursor-pointer'>←</span>
          <h2 className='font-medium ml-5'>Post</h2>


        </div>
        <div className='mt-2  w-64 flex  '>
          <img className='h-12 rounded-full ml-4' src={profile} alt="" />
          <div className=' w-full ml-2'>
          <span className=''>Elon Musk</span>
          <img className='h-4 ml-1 inline ' src={tick} alt="" />
          <span className='font-light text-sm opacity-75 block '>@elonmusk</span>

          </div>
        </div>
        <div className='  mt-4 h-16  px-6 pr-1  overflow-y-auto'>
          {joke ? joke : "🔃.."}
        </div>

        <div className='px-6 mt-2  border-white h-10 space-x-1 '>
          <span className='font-light opacity-75 text-sm' >11:18PM .</span>
          <span className='font-light opacity-75 text-sm'> Jul 30, 2024 .  </span>
          <span className='font-medium'> 20.5M <span className='font-light opacity-75 text-sm'>Views</span></span>
        </div>
        <hr className='border-gray-500 w-11/12 mx-auto' />
        <div className='p-1 pl-5 pr-5 mt-2 h-8 flex justify-around'>
          <div className='flex hover:cursor-pointer'>
            <img className='h-4' src={chat} alt="" />
            <span className='pl-1 font-thin text-gray-400 text-xs'>{comment}</span>

          </div>

          <div className='flex  hover:cursor-pointer'>
            <img className='h-4' src={repost} alt="" />
            <span className='pl-1 font-thin text-gray-400 text-xs '>{rps}k</span>


          </div>
          <div className='flex  hover:cursor-pointer'>
            <img className='h-4 ' src={like} alt="" />
            <span className='pl-1 font-thin text-gray-400 text-xs '>{dil}k</span>


          </div>
          <div className='flex  hover:cursor-pointer'>
            <img className='h-4' src={bookmk} alt="" />
            <span className='pl-1 font-thin text-gray-400 text-xs '>{book}k</span>


          </div>
          <div className='flex  hover:cursor-pointer'>
            <img className='h-4' src={share} alt="" />


          </div>


        </div>
        <hr className='border-gray-500 w-11/12 mx-auto' />

      </div>

    </>
  )
}

export default App
