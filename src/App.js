import React from 'react';
import './App.css';

class App extends React.Component{

  render(){
    const pop = ()=>{
      let re = document.querySelector('.re');

      re.style = 'display:block';
    }

    const back = ()=>{
      let count = document.querySelector('[name="count"]');
      let x = document.querySelectorAll('[count]').length;
      let last = document.querySelector('[count="'+(x)+'"]');
      
      count.value--;
      last.parentNode.innerHTML = '<div class="dot"/>';
      last.remove();
    
      console.log(count, x, last) 
      close();
    }
    const close = ()=>{
      let pop = document.querySelector('.pop');

      pop.style = 'display:none';
    }

    return (
      <div className="App">
        <header className="App-header">
          <input type="hidden" name="count" value=""/>
          <div className="nav">
            <h1>OMOK</h1>

            {/* 버튼(무르기 / 리셋) */}
            <button id="back" onClick={pop}>무르기</button>
            <button id="reset">묻고 더블로 가!</button>

            {/* 무르기 누르면 나오는 팝업 */}
            <div className="pop re">
              <h2>한번만 물러줘 🥺</h2>
              <div className="btn">
                <button id="ok" onClick={back}>그래!</button>
                <button id="no" onClick={close}>싫어!</button>
              </div>
            </div>

            {/* 승리시 이펙트(흑/백 각각) */}
            <div className="pop win">
              <h2>🏆 Black Win!! 🏆</h2>
              <div className="btn">
                <button id="next">다시 한 판!</button>
                <button id="end">그만할래 😥</button>
              </div>
            </div>
            <div className="pop">
              <h2>🏆 White Win!! 🏆</h2>
              <div className="btn">
                <button id="next">다시 한 판!</button>
                <button id="end">그만할래 😥</button>
              </div>
            </div>
          </div>
        </header>
        <div id='zone'>
          <Board/>
        </div>
      </div>
    );
  }
}

class Board extends React.Component{
  
  renderBox(i){
    return Box(i)
  };
  
  render(){
    const row = [];
    for(var i=0; i<19; i++){
      const rrow =[];
      for(var j=0; j<19; j++){
        rrow.push(this.renderBox(j));
      }
      row.push(
        <div className='row' yval={i}>
          {rrow}
        </div>
      );
    }
    return (
      <div id='board'>
        {row}
      </div>
    );
  }
}

function Box(i){
  return(<div className='box' xval={i} onClick={onBall}><div className='dot'/></div>);
}

const onBall = (e)=>{
  let count = document.querySelector('[name="count"]');
  let x = parseInt(e.target.getAttribute('xval'));
  let y = parseInt(e.target.parentNode.getAttribute('yval'));
  
  if(e.target.className === 'dot'){
    count.value++;
    let x = parseInt(e.target.parentNode.getAttribute('xval'));
    let y = parseInt(e.target.parentNode.parentNode.getAttribute('yval'));
    if(count.value % 2 == 1){
      e.target.parentNode.innerHTML = '<div class="ball" color="Black" style="background:black" count="'+count.value+'" x="'+(x+1)+'" y="'+(y+1)+'"/>'
    } else {
      e.target.parentNode.innerHTML = '<div class="ball" color="White" style="background:white" count="'+count.value+'" x="'+(x+1)+'" y="'+(y+1)+'"/>'
    }
  } else {
    if(!e.target.getAttribute('color')){
      if(e.target.firstChild.className === 'ball'){
        alert('이미 돌이 있는 자리입니다.');
      } else {
        count.value++;
        if(count.value % 2 === 1){
          e.target.innerHTML = '<div class="ball" color="Black"color="White" style="background:black" count="'+count.value+'" x="'+(x+1)+'" y="'+(y+1)+'"/>'
        } else {
          e.target.innerHTML = '<div class="ball" color="White" style="background:white" count="'+count.value+'" x="'+(x+1)+'" y="'+(y+1)+'"/>'
        }
      }
    } else if(e.target.getAttribute('color')) {
      alert('이미 돌이 있는 자리입니다.');
    }
  }
  game();
}

function game(){
  let i = document.querySelectorAll('[count]').length;
  let last = document.querySelector('[count="'+(i)+'"]');

  let last_x = last.getAttribute('x');
  let last_y = last.getAttribute('y');
  let last_c = last.getAttribute('color');

  let black_x = document.querySelectorAll('[color="Black"]');
  let white = document.querySelector('[color="White"]');
  
  if(black_x)

  console.log(last_x, last_y, last_c);
}

export default App;