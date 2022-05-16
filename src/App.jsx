import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力プラットフォームに関するstate配列を宣言
  const [todoText, setTodoText] = useState("");

  //未完了のTODO要素を格納するstate配列を宣言
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //完了したTODO要素を格納するstate配列を宣言
  const [completeTodos, setCompleteTodos] = useState([]);

  //onChangeコマンドの受け取りを行う関数の設定
  // (レンダリングによるテキストボックスの強制初期化回避に必要)
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //追加ボタンの機能実装
  const onClickAdd = () => {
    if (todoText === "") return;
    //未完了のTodoに代入するための配列
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタンの機能実装
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンの機能実装
  const onClickComplete = (index) => {
    //一度削除ボタンと同じ処理を行い
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    //今度は追加ボタンと同じ処理を行う
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタンの機能実装
  const onClickReturn = (index) => {
    //一度削除ボタンと同じ処理を行い
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    //今度は追加ボタンと同じ処理を行う
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        　
        {/* 下行の最右、onChangeコマンドによりレンダリングによる強制初期化を回避している */}
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area ">
        <p className="tittle">未完了のTODO</p>
        <ul>
          {/* 繰り返しのMap処理 */}
          {incompleteTodos.map((todo, index) => {
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

      <div className="complete-area">
        <p className="tittle">完了したTODO</p>
        <ul>
          {/* 繰り返しのMap処理 */}
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
