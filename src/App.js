
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MycomponentClass';
import Counter from './Counter';
import CounterF from './counterF';
import EventPractice from './EventPractice';
import Counter2 from './Counter2';
import { MyContext } from './component/MyContext';




function App() {
  const newtext = '안녕하세요';
  const name ="리액트";
  return (
    // *jsx에서 자바스크립트 표현식을 사용하려면 {}로 감싼다.
    // *jsx에서는 if문을 사용할 수 없다.
    //if문 대신 조건부연산자 - 삼항연산자를 사용한다.
    <MyContext.Provider value={newtext}>
    <div className='react'>
      <h2>useReducer 연습</h2>
      <Counter2></Counter2>
      {/* 이벤트 연습 */}
      <EventPractice></EventPractice>

    {/* 함수형 state */}
    <CounterF></CounterF>

    {/* 클래스형 state */}
    <Counter></Counter>

    <MyComponentClass name="classGreen" age={30}>
      <h3>children</h3>
    </MyComponentClass>

    {/* 디폴트값 지정 */}
    <MyComponentClass></MyComponentClass>

    <MyComponent name='green' age={30}><h2>h2입니다.</h2></MyComponent>
    <MyComponent name='blue' age={50}><h3>hihihi</h3></MyComponent>
    <MyComponent />
    <h1>{ name ==='리액트' ? (<span>리액트입니다.</span>): null }</h1>
    <h2>하이하이</h2>
    <input type="text"/>
    </div>
    </MyContext.Provider>
  );
  // return React.createElement("div",null,"hello",React.createElement("b",null,"react"))
}

export default App;
