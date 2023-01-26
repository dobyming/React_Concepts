const OddEvenResult = ({count}) => {
    console.log(count);
    return <>{ count%2 === 0 ? "짝수" : "홀수" }</>
} //count의 state(Counter 컴포넌트)가 바뀔때마다 OddEvenReuslt 컴포넌트가 props로 받아서 짝/홀 구분을 동적으로 렌더링

export default OddEvenResult;