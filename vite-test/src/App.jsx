import { useState } from 'react'
import './App.css'

function App() {


  const [fruit, setFruit] = useState(['사과','수박','딸기']);

     return (

          <>

               <h4>{fruit}</h4>

               <button onClick={()=>{

                    let fruit2 = ['바나나', '오렌지', '토마토']

                    let copy = [...fruit]
                    copy[0] ="바나나"

                    setFruit(copy);

               }}>과일 3개 더 더하기</button>

          </>

     );

}

export default App;