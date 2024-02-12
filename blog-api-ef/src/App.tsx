import { useEffect, useState } from 'react'
import './App.css'
import { Body } from './elemets/Title'
import { conments } from './conments'
import { ConmentDiv } from './elemets/conmet'

function App() {
  const [comment, setcommet] = useState ([] as conments[])
  
  async function Load(){
    try {
      const response = await fetch('http://localhost:3000/api/comments');
      if (!response.ok) {
        console.log('Hiba a letöltéskor');
        return;
      }
      const content = await response.json() as conments[];
      setcommet(content);
    } catch {
      console.log('Hiba a letöltéskor');
    }
  }

  useEffect(() =>{
    Load()
  }, [])

    return <div className='container'>
      <Body/>
      <h2>Comments</h2>
      <ul>
        {
          comment.map(x => <div>{<ConmentDiv content={x}/>}</div>)
        }
      </ul>
    </div>
}

export default App
