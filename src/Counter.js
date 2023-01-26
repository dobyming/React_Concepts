import React,{useState} from 'react'
import OddEvenResult from './OddEvenResult';

const Counter = ({initialValue}) => { //App 컴포넌트에서 Counter 컴포넌트로 넘겨준 initialValue를 props로 전달받음
    //0에서 출발(상태)하며 +1,-1씩 수행할 수 있음 
    //useState의 매개변수는 초기값을 넘겨 받음 => 0에서 출발
    const [count,setCount] = useState(initialValue); //count: 값 리턴 , setCount: count값을 변화시키는 상태 변화 함수 
    const onIncrease = () => {
        setCount(count+1); //count값에 +1해서 값을 update
    }
    const onDecrease = () => {
        setCount(count-1);
    }
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick = {onIncrease}>+</button> {/**JSX식으로 {함수명}을 입력 */}
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    ); //count state가 바뀔때마다 Counter컴포넌트에서 반환을 실시간으로 하고 있음:Re-Render
};

Counter.defaultProps = {
    initialValue: 0,
}; //props에 고정적으로 박아두고 싶을때

export default Counter