import React from "react";

export const IncompleteTodos = (props) => {
  //分割代入
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area ">
      <p className="tittle">未完了のTODO</p>
      <ul>
        {/* 繰り返しのMap処理 */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
