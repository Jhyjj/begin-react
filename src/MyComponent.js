// const MyComponent = () =>{
//     return <div>새로운 컴포넌트 생성</div>
// }

// // function MyComponent(){
// //     return <div>새로운 컴포넌트 생성</div>;
// // }

// export default MyComponent

import React from 'react';
import PropTypes from 'prop-types';

//구조분해 할당으로 적기
const MyComponent = ({name,age,children}) => {
    return (
        <div>
            안녕하세요 제이름은 {name}입니다.<br/>
            제 나이는 {age}입니다.<br/>
            {children}입니다.
        </div>
    );
};
//props 기본값 설정
MyComponent.defaultProps ={
    name:'기본이름',
    age:'1',
};

MyComponent.propTypes = {
    name: PropTypes.string
}
//propTypes 종류
//array : 배열
//bool : true 혹은 false
//func : 함수
//number : 숫자
//object : 객체
//string : 문자
//any :  종류 상관없이 다 가능
//https://github.com/facebook/prop-types 
export default MyComponent;
