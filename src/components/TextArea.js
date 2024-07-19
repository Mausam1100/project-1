import React, {useState} from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("")
    
    if (text.length === 0) {
        props.passBtnAlert(null)
    }

    const upperCase = () => {
        setText(text.toUpperCase());
        props.passBtnAlert("Text Is Converted Into Upper Case")
    }

    const lowerCase = () => {
        setText(text.toLowerCase());
        props.passBtnAlert("Text Is Converted Into Lower Case")
    }

    const resetText = () => {
        setText("")
        props.passBtnAlert("Text Is Cleared")
    }

    const trimText = () => {
        let trimOne = text.replace(/\s+/g, " ")
        setText(trimOne)
        props.passBtnAlert("Text Is Trimed")
    }

    const copyText = () => {
        let copyOne = document.getElementById("textBox")
        copyOne.select()
        navigator.clipboard.writeText(copyOne.value)
        // window.getSelection().removeAllRanges()
        props.passBtnAlert("Text Is Copied To Your Clipboard")
    }

    const updateText = event => {
        setText(event.target.value)
    }

  return (
    <div>
        <div className='max-w-[1500px] w-[85%] mx-auto flex flex-col items-center py-6'>
            <div>
                <h2 className='text-xl font-bold py-3' style={{color: props.darkMode?"white":"black"}}>Enter The Text Below:</h2>
            </div>
            <div className='space-y-3'>
                <textarea value={text} id="textBox" onChange={updateText} className='border-2 border-black p-4 rounded-lg' placeholder='Enter the text' rows="8" cols="85"></textarea>
                <div className='space-x-5'>
                    <button onClick={upperCase} className={`${props.functionBtn} px-3 py-2 font-semibold rounded-md`}>Uppercase</button>
                    <button onClick={lowerCase} className={`${props.functionBtn} px-3 py-2 font-semibold rounded-md`}>Lowercase</button>
                    <button onClick={trimText} className={`${props.functionBtn} px-3 py-2 font-semibold rounded-md`}>Trim</button>
                    <button onClick={copyText} className={`${props.functionBtn} px-3 py-2 font-semibold rounded-md`}>Copy</button>
                    <button onClick={resetText} className={`${props.functionBtn} px-3 py-2 font-semibold rounded-md`}>Reset</button>
                </div>
            </div>
            <div className='space-y-4 pt-11' style={{color: props.darkMode?"white":"black"}}>
                <h3 className='text-center font-semibold text-lg'>Text Summary</h3>
                <table>
                    <thead>
                        <tr>
                            <td className={`border-2 ${props.darkMode?'border-white':'border-black'} px-3 py-2`}>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} letters</td>
                            <td className={`border-2 ${props.darkMode?'border-white':'border-black'} px-3 py-2`}>{(0.002*text.length).toFixed(2)} min to read</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}
