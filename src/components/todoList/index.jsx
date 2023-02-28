import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoListStyle = styled.div`
  .input-group {
    display: flex;
    border: 1px solid #ccc;
    height: 40px;
    input {
      flex: 1;
      padding: 0 10px;
      outline: none;
    }
    button {
      padding: 0 10px;
      background: #ccc;
      &:disabled {
        opacity: 0.2;
        cursor: no-drop;
      }
    }
  }
  .group-list {
    display: flex;
    justify-content: space-between;
  }
  .list-board {
    display: flex;
    gap: 30px;
    .board {
      flex: 1;
      .title {
        font-size: 30px;
        margin: 20 0px 20 0px;
        font-weight: bold;
      }
    }
  }
`;
export const ToDoList = ({ todoList, onAdd, onRemove }) => {
  console.log("🚀 ~ file: index.jsx:41 ~ ToDoList ~ todoList:", todoList);
  // const listDoing = todoList?.filter((e) => !e.isComplete);
  // const listDone = todoList?.filter((e) => e.isComplete);
  const [value, setValue] = useState("");
  const [listDoing, setListDoing] = useState([]);
  const [listDone, setListDone] = useState([]);

  useEffect(() => {
    if (todoList) {
      console.log(todoList);
      setListDoing(todoList?.filter((e) => !e.isComplete));
      setListDone(todoList?.filter((e) => e.isComplete));
    }
  }, [todoList]);

  const _onAdd = () => {
    console.log(value);
    onAdd(value);
    setValue("");
  }; //các component nào có tiền tố là _ là sử dụng nội bộ
  // function này dùng để set lại giá trị không có khoảng trắng dư thừa ở đầu và cuối
  return (
    <TodoListStyle>
      {console.log(todoList)}
      <div className="input-group">
        <input
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          type="text"
          placeholder="Task"
        />
        {/* disable = !value.trim() làm cho button hiển thị khi có giá trị trong input  */}
        {/* hàm trim() ngăn button hiển thị khi input được nhập khoảng trắng */}
        <button onClick={_onAdd} disabled={!value.trim()}>
          Add
        </button>
      </div>
      <div className="list-board">
        <div className="board">
          <div className="title">Công việc đang làm</div>
          <div className="items">
            {listDoing.map((e) => (
              <>
                <TodoItems key={e.id} {...e} />
                <button onClick={onRemove}>Remove</button>
              </>
            ))}
          </div>
        </div>
        <div className="board"></div>
        <div className="board">
          <div className="title">Công việc đã hoàn thành</div>
          <div className="items">
            {listDone.map((e) => (
              <TodoItems key={e.id} {...e} />
            ))}
          </div>
        </div>
        <div className="board"></div>
      </div>
    </TodoListStyle>
  );
};

const ToDoItemsStyle = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  .name {
    flex: 1;
  }
  button {
    border: 1px solid #ccc;
    padding: 0 10px;
  }
  &.isComplete {
    background: #ccc;
    button {
      display: none;
    }
    .name {
      text-decoration: line-through;
    }
  }
`;

const TodoItems = ({ id, name, isComplete }) => {
  return (
    <ToDoItemsStyle className={isComplete ? "isComplete" : ""}>
      <div className="name">{name}</div>
      <button>✓</button>
    </ToDoItemsStyle>
  );
};
