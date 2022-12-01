import { useState } from 'react'

const Bold = (props) => {
    const [text, setText] = useState('Domyślny tekst')
    const [size, setSize] = useState(12)
    const [color, setColor] = useState('blue')

    const handleTextChange = (event) => {
        setText(event.target.value.toUpperCase())
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value)
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    const style = {
        color: color,
        fontSize: `${size}px`,
    }

    const styleRoot = {
        width: '400px',
        margin: '10px',
        border: '1px #613D8C solid',
        backgroundColor: props.color,
    }

    return (
        <div style={styleRoot}>
            <input type="text" value={text} onChange={handleTextChange} />
            <input type="number" value={size} onChange={handleSizeChange} />
            <select value={color} onChange={handleColorChange}>
                <option value="black">Czarny</option>
                <option value="red">Czerwony</option>
                <option value="green">Zielony</option>
                <option value="blue">Niebieski</option>
            </select>

            <p style={style}>{text}</p>
        </div>
    )
}

export default Bold