import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function navbar() {

  const hidHandle1 = () => {
    const drops1 = document.getElementsByClassName('drop1')
    for (const drop1 of drops1) {
      drop1.classList.toggle("hidden");
    }
  };
  const hidHandle2 = () => {
    const drops2 = document.getElementsByClassName('drop2')
    for (const drop2 of drops2) {
      drop2.classList.toggle("hidden");
    }
  };
  const hidHandle3 = () => {
    const drops3 = document.getElementsByClassName('drop3')
    for (const drop3 of drops3) {
      drop3.classList.toggle("hidden");
    }
  };
  const hidHandle4 = () => {
    const drops4 = document.getElementsByClassName('drop4')
    for (const drop4 of drops4) {
      drop4.classList.toggle("hidden");
    }
  };
  const barsHandle = () => {
    const bars = document.getElementsByClassName('bars')
      for(const bar of bars){
      bar.classList.toggle('hidden')
    }
  };
  

  return (
    <div>
      <nav className='transition duration-300 ease-in-out navbar select-none fixed z-10 justify-between flex h-16 w-screen md:justify-evenly hover:bg-white'>
        <Link href="/" className='h-full overflow-hidden' style={{ mixBlendMode: 'multiply' }}><Image src='/Longines-logo.png'
          width={130}
          height={100}
          alt="Longines"
          style={{
            // width:"auto",height:"auto",
             marginLeft: '10px', objectFit: 'contain' }}
        /></Link>
        <input type="search" id="search" name="search" placeholder="Search your type" className=' hidden md:block m-3 h-10 w-150 rounded-xl text-center sm:' />
        <div className='hidden md:block'><div className='transition duration-300 ease-in-out select-none hidden md:block  md: m-5 font-serif font-semibold cursor-pointer md:hover:scale-[1.1] mb-0 sm:' onClick={hidHandle1}>Collection <i className="fa-solid fa-angle-down"></i></div><div className='drop1 hidden h-20 w-30 bg-white grid text-center rounded-b-xl '><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Classic Collection</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Sports Collection</div></div></div>

        <div className='hidden md:block'><div className='transition duration-300 ease-in-out select-none hidden md:block m-5 font-serif font-semibold cursor-pointer md:hover:scale-[1.1] mb-0 sm:' onClick={hidHandle2}>Selection <i className="fa-solid fa-angle-down"></i></div><div className='transition duration-300 ease-in-out hidden drop2 h-[200px] w-30 bg-white grid text-center rounded-b-xl '><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Men's watches</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md' >Women's watches</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Gift finder</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Collector's Corner</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 hover:rounded-md'>Watches Selector</div></div></div>

        <div className='transition duration-300 ease-in-out hidden md:block m-5 cursor-pointer  md:hover:scale-[1.1]'><i className="fa-solid fa-cart-shopping"></i></div>
        <div className=' md:hidden m-3'><i className="fa-solid fa-bars" onClick={barsHandle}></i></div>
        
      </nav>


      {/* *************************** */}
      <div className="bars grid hidden md:hidden" style={{position:'sticky'}}>
        <div className='m-3 h-10 w-150 rounded-xl text-center sm:' ></div>
        <input type="search" id="search" name="search" placeholder="Search your type" className='m-3 h-10 w-150 rounded-xl text-center sm:' />
        <div><div className='select-none m-5 font-serif font-semibold cursor-pointer md:hover:scale-[1.1] ' onClick={hidHandle3}>Collection <i className="fa-solid fa-angle-down"></i></div><div className='drop3 hidden h-20 w-30 bg-white grid text-center rounded-xl '><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 '>Classic Collection</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100 '>Sports Collection</div></div></div>

        <div><div className='select-none m-5 font-serif font-semibold cursor-pointer md:hover:scale-[1.1] ' onClick={hidHandle4}>Selection <i className="fa-solid fa-angle-down"></i></div><div className='drop4 hidden h-[200px] w-30 bg-white grid text-center rounded-xl '><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100'>Men's watches</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100' >Women's watches</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100'>Gift finder</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100'>Collector's Corner</div><div className='pt-1 mt-2 font-serif cursor-pointer hover:bg-gray-100'>Watches Selector</div></div></div>
        <div className='hidden md:block m-5 cursor-pointer  md:hover:scale-[1.1]'><i className="fa-solid fa-cart-shopping"></i></div>
      </div>
    </div>
    
  )
}
