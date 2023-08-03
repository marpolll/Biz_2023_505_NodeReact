import { useState } from "react";

// 여기는 Todo Content 를 입력하고 추가를 실행하는 Component
/**
 * @param {*} props
 * 부모 Comps 로 부터 전달받은 모든것을 담아 오는 바구니
 * props 를 통하여 전달받은 모든것은 Read Only 이다.
 * props 를 통하여 전달받은 state 도 여기에서 절대 변경 할수 없다.
 * props 를 통하여 전달받은 state 를 변경하려면 state 를 변경 할 함수도
 *  같이 전달 받아야 한다.
 * @returns
 */
const TodoInput = (props) => {
  // 화면에 데이터를 Rendering 할때 사용할 State(변수) 선언
  //   const [content, setContent] = useState("");

  // const [n1.n2] = ["한국", "일본"]
  const { content, setContent, todoListAdd } = props;

  // 위에서 처럼 한번에 처리
  // const content1 = props.content
  // const setContent = props.setContent

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const btnClickHandler = (e) => {
    // 추가버튼을 클릭했을때 할일
    todoListAdd(content);
    setContent("");
  };

  return (
    <div className="input">
      <input placeholder="TODO" value={content} onChange={inputChangeHandler} />
      {/* 
        jsx 주석
        본문에 tag 내에서 사용하는 주석문

        button disabled 속성
        html 에서는 disabled = "disabled" 라고 속성을 지정하면
        button tag 에 click 속성이 사라지는 효과를 낼수 있다.
        button disabled style 을 지정해 주면 button disabled 가 설정되었을때
        모양을 만들 수 있다.

        react 에서는 disabled={true} 라는 속성으로 사용한다.
      */}
      <button disabled={content.length < 2} onClick={btnClickHandler}>
        저장
      </button>
    </div>
  );
};

export default TodoInput;
