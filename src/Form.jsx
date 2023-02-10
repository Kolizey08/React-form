import React, { useState } from 'react'
import './Form.css'

export default function Form() {
    const [text, setText] = useState('')
    const [sented, setSented] = useState(false)
    const [blur, setBlur] = useState(false)

    const handleSetText = (e) => {
        setText(e.target.value)
        setSented(false)
    }
const handleClick = () => {
    console.log(text)
}

const hendleSubmit = (e) => {
    e.preventDefault()
    setText('')
    setSented(true)
    setBlur(false)
}

const handeleBlur = () => {
setBlur(true)
setSented(false)
}


  return (
    <div className='divForm'>
    <form className='form' onSubmit={hendleSubmit}>
        <input className='inp' type="text" value={text} onBlur={handeleBlur} onChange={handleSetText} />
        <button disabled={!text} onClick={handleClick} className='btn'>Отправить</button>
    </form>
    {sented && <div className='sentedText'>Сообщение успешно отправлен</div>}
    {!text && blur && <div className='blurText'>поле ввода не дложно быть пустым</div>}
    </div>
  )
}
