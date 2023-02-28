import React from "react";
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
export const ToDoList = () => {
  return (
    <TodoListStyle>
      <div className="input-group">
        <input type="text" placeholder="Task" />
        <button onClick={() => console.log("dsada")}>Add</button>
      </div>
      <div className="list-board">
        <div className="board">
          <div className="title">Công việc đang làm</div>
          <div className="items">
            <TodoItems />
          </div>
        </div>
        <div className="board"></div>
        <div className="board">
          <div className="title">Công việc đã hoàn thành</div>
          <div className="items">
            <TodoItems />
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

const TodoItems = () => {
  return (
    <ToDoItemsStyle className="isComplete">
      <div className="name">Công việc A</div>
      <button>✓</button>
    </ToDoItemsStyle>
  );
};
