import React from "react";

//関数コンポーネントである
export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="tittle">完了したTODO</p>
      <ul>
        {/* 繰り返しのMap処理 */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
