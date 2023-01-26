# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can run CRA by using `npm start` 

## Main Concepts of React.js 

Brief doc of main concept of React.js (JSX, Props, State)

### JSX
JSX는 **JavaScript+XML**의 합성어로, JS에 HTML태그를 끼얹은 문법입니다. 

HTML 태그 안에서 중괄호 { } (*destucting문법)를 사용해서 JS를 활용할 수 있다.

Usage
```jsx
function App () {
    const number = 5;
    return(
        <b>{number}입니다.</b>
    )
}
export default App; //index.js에서 import
```
📌React에서는 `App.js`를 **최상위 컴포넌트**로 관례상 간주하고 있습니다. 그래서 `index.js`를 최상위 컴포넌트로 구현하진 않습니다.

### State
컴포넌트 안에서 자유롭게 변경할 값이 필요할때 사용합니다. 

- `useState(초기값)` : 매개변수로 초기값을 전달 받습니다
- `const[상태명, set함수명] = React.useState(초기값)` : 상태명: 값 리턴 , set함수명: count값을 변화시키는 상태 변화 함수 

### Props
컴포넌트 간 데이터를 전달 시에는 `props`를 활용합니다.

주로 **컴포넌트의 매개변수**를 `props`로 받으며 컴포넌트 간 렌더링이 일어납니다. 

>자세한 예제 (`src` 폴더 내) 
1. `App.js` - `Counter.js` 간 `counterProps` 코드
2. `App.js` - `Container.js` 간 `children` 코드

---
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



