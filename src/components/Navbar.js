import React from 'react'


export default function Navbar(props) {
  return (
    <div className={`py-3 ${props.navBg}`}>
        <div className='max-w-[1500px] w-[85%] mx-auto flex justify-between items-center'>
            <div>
                <a href="#"><h3 className='text-xl font-bold'>{props.title}</h3></a>
            </div>
            <div>
                <ul className='flex space-x-10 font-semibold items-center'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Setting</a></li>
                    <button onClick={props.toggleMode} className={`${props.modeBtn} px-3 py-2 rounded-lg`}>Dark Mode</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

Navbar.defaultProps = {
    title: "Title"
}