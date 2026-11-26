import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {
  const [post, setPost] = useState([
    { 
      title: '경기도',
      date: '11월 19일',
      content: '수원시, 성남시, 용인시, 화성시'
    }, 
    { 
      title: '강원도',
      date: '11월 18일',
      content: '원주시, 강릉시, 태백시'
    },
    { 
      title: '제주도',
      date: '11월 17일',
      content: '제주시, 서귀포시'
    },
  ]);
  const [postnum, setPostnum] = useState(0);
  const [clickup, setClickup] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const OpenModal = (i) => {
    setModal(true);
    setPostnum(i);
  };


  const inserBtn = ()=>{
    if (input.trim() === '') return;   // 빈 제목은 추가하지 않음

    let copy = [...post];
    copy.unshift({
      title: input,
      date: '11월 20일',
      content: ''
    })
    setPost(copy);
    setInput('');  // input 초기화

    let copy2 = [...clickup];
    copy2.unshift(0);
    setClickup(copy2);
  }

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4 style={{color:'red', fontSize:'20px'}}>React Blog</h4>
        </div>

        {
          post.map((p, i)=>
            <div className="list" key={i}>
              <h4 onClick={()=>OpenModal(i)}>{p.title}
                <span onClick={(e)=>{
                  let copy = [...clickup];
                  copy[i] = clickup[i] + 1;
                  setClickup(copy);
                  e.stopPropagation();
                }}>👍</span> {clickup[i]}
              </h4>
              <p>{p.date}</p>

              <button onClick={()=>{
                let copy = [...post];
                copy.splice(i, 1);
                setPost(copy);

                let copy2 = [...clickup];
                copy2.splice(i, 1);
                setClickup(copy2);

                setModal(false);   // 열린 글이 지워져도 오류가 나지 않게 모달 닫기
              }}>글 삭제</button>
            </div>
          )
        }  

        <input type="text" onChange={(e)=>{
          setInput(e.target.value);
        }} value={input} />

        <button onClick={inserBtn}>글 추가</button>


        {
          modal === true && <Modal post={post} postnum={postnum} setModal={setModal} />
        }
                
      </div>
    </>
  )
}

export default App
