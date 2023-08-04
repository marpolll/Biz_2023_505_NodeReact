import TodoInput from "./TodoInput";
import { useState } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { SampleData } from "../data/SampleTodo";

// JS 에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// Date 라고 하는 날짜와 관련된 객체가 있지만
// 실무에서는 거의 moment 를 사용한다.
import moment from "moment";

const TodoMain = () => {
  /**
   * State 끌어 올리기
   * TodoINput 과 TodoList 에 있던 State 들을
   * TodoMain 부모 컴포넌트로 이동
   * 1. TodoInput 에서 입력된 Content state 의 값을
   * 2. TodoList 의 TodoList state 배열에 추가하여
   * 3. TodoList > TodoItem 을 통하여 화면에 출력을 해야한다.
   *
   * 이 상황에서 TodoInput 과 TodoList 는 같은 부모의 형제간이다.
   *    React 에서는 형제간에 state 를 절대 공유할수 없다.
   *    React 부모가 만들어서 전달해준 state 만 볼수 있다.
   *    자식이 만든 state 는 부모도 볼수 없다.
   *
   * 이 상황을 해결하기 위하여 자식 comps 에 있던 state의 state 함수를
   * 부모 Comps 인 TodoMain 으로 끌어 올리기를 한다.
   * 그리고, 자식 comps 에 전달해주어야 한다.
   */
  const [todo, setTodo] = useState(null);
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoListAdd = (todo) => {
    const id = todoList[todoList.length - 1]?.id + 1 || 0;
    const addTodo = {
      id: id,
      sdate: moment().format("YYYY[-]MM[-]DD"),
      stime: moment().format("HH:mm:ss"),
      content: todo,
      complete: false,
    };
    setTodoList([...todoList, addTodo]);
  };

  const itemComplete = (id) => {
    // 완료처리 예정

    const compTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    // id 에 해당하는 데이터 삭제

    if (window.confirm("삭제함??")) {
      // list 를 forEach 하면서 item의 id 와 일치하는 데이터가 있으면
      // 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 id 와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  // Content 를 클릭했을때 선택된 item 을 찾아주는 함수
  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((todo) => {
      return todo.id === id;
    });
    setContent(selectTodoList[0].content);
    // 업데이트를 위한 임시 데이터 저장
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭했을때 내용을 변경하는 함수
  const updateItemOk = (text) => {
    if (todo) {
      const updateTodo = { ...todo, content: text };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo;
        }
        return item;
      });
      setTodoList(updateTodoList);
      setTodo(null);
    } else {
      todoListAdd(text);
    }
  };

  return (
    <div className="todo">
      <TodoList
        todoList={todoList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
      <TodoInput
        content={content}
        setContent={setContent}
        todoListAdd={updateItemOk}
      />
    </div>
  );
};

export default TodoMain;
