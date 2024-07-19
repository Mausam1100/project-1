import React from 'react'

export default function Alert(props) {
  return (
    <div className='h-10'>
      {props.showAlert && <div className={`h-10 bg-green-200 text-black font-semibold text-base`}>
        <div className='max-w-[1500px] w-[85%] mx-auto h-full flex items-center'>
          <div>{props.showAlert}</div>
        </div>
      </div>}

      {props.btnAlert && <div className={`h-10 bg-green-200 text-black font-semibold text-base`}>
        <div className='max-w-[1500px] w-[85%] mx-auto h-full flex items-center'>
          <div>{props.btnAlert}</div>
        </div>
      </div>}
    </div>
  )
}
