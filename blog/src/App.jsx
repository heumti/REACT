import './App.css';
import { useState } from 'react';
import Modal from './Modal';

function App() {

  const [title, setTitle] = useState(['경기도', '강원도', '제주도']);
  const [clickup, setClickup] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'20px'}}>React Blog</h4>
      </div>

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setModal(!modal);
              }}>{a} <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...clickup];
                copy[i] = copy[i] + 1;
                setClickup(copy);
              }}>👍</span> {clickup[i]} </h4>
              <p>11월 19일 발행</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal/> : null
      }

    </div>
  )
}

export default App
