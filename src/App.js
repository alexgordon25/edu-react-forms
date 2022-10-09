import { useState } from 'react'

function App() {
  const [value, setValue] = useState({ 
    normal: 'Your Name', 
    textarea: 'Your Message',
    select: '',
    check: false,
    status: 'feliz',
  })
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' 
        ? target.checked
        : target.value
    }))
  }
  console.log(value)
  return (
      <div>
        
        {value.length < 5  ? <span>Min length of 5</span> : null }
        
        <input 
          type='text' 
          name='normal' 
          value={value.normal} 
          onChange={handleChange} 
        />

        <textarea 
          name='textarea' 
          value={value.textarea}
          onChange={handleChange}
        />

        <select
          name='select'
          value={value.select}
          onChange={handleChange}
        >
          <option value=''>-- Select --</option>
          <option value='chanchofeliz'>Chancho Feliz</option>
          <option value='chanchitofeliz'>Chanchito Feliz</option>
          <option value='chanchitotriste'>Chanchito Triste</option>
          <option value='felipe'>Felipe</option>
        </select>

        <input
          type='checkbox'
          name='check'
          onChange={handleChange}
          checked={value.check}
        />
        
        <div>
          <label>Chancho</label>
          <input
            onChange={handleChange}
            type='radio'
            name='status'
            value='feliz'
            checked={value.status === 'feliz'} 
          /> Feliz
          <input
            onChange={handleChange}
            type='radio'
            name='status'
            value='triste'
            checked={value.status === 'triste'} 
          /> Triste
          <input
            onChange={handleChange}
            type='radio'
            name='status'
            value='felipe'
            checked={value.status === 'felipe'} 
          /> Felipe
        </div>

      </div>
  );
}

export default App
