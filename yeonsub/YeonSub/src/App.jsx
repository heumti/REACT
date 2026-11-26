import { useState } from 'react'
import './App.css'

const products = [ 
  {id: 1, name: '사과',price: 1000, soldOut: false },
  {id: 2, name: '바나나', price: 2000, soldOut: true},
  {id: 3, name: '포도', price: 3000, soldOut: false},
]

function Card({ name, price, soldOut }) {
  return <p>{name} {price}원 {soldOut ? '(품절)' : ''}</p>
}


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <h1>리액트 연습</h1>
    <button onClick={()=> setCount(count + 1)}>
      count is {count}
    </button>

    {products.map(p => (
      <Card key={p.id} name ={p.name} price = {p.price} soldOut={p.soldOut}/>
    ))}

    </>
  )
}

export default App