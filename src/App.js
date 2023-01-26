import './App.css';
import MyHeader from './MyHeader'; //컴포넌트 불러오기
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  // let name = 'Front';
  const func = () => { return 'func' };
  const number = 5; 

  //props 관리
  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
  };

  return (
    <Container> {/*Container 컴포넌트 아래 자식 컴포넌트를 props로 전달받음 */}
      <div>
        <MyHeader/> {/* import한 컴포넌트는 실제로 return에 구현해야 작동한다. */}
          {/* <h3>Hello React.js {func()} </h3> */}
          {/* <b id="bold_text"> */}
            {/* {number}는 : {number%2 === 0 ? "짝수" : "홀수"} 조건부 렌더링 */}
          {/* </b> */}
        <Counter {...counterProps} /> {/**비구조화 할당(표현: {쓸 객체요소})으로 Counter에서 전달받음 */}
      </div>
    </Container>
  ); 
}

export default App;
