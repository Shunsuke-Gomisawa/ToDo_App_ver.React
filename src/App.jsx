import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  //入力プラットフォームに関するstate配列を宣言
  //第一引数(todoText)    =Stateの名前
  //第二引数(setTodoText) =Stateの更新関数
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
    //何も入力されてないのに追加ボタンが押された場合
    if (todoText === "") return;
    //未完了のTodoに代入するための配列
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //処理完了後テキストボックスの中身をカラにする
    setTodoText("");
  };

  //削除ボタンの機能実装
  const onClickDelete = (index) => {
    //newTodosという配列を準備
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

  //JSXにあたる部分を作成したコンポーネントを用いて表記
  return (
    <>
      {/* ↓　一番上の入力フォーム */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるToDo5個までです。消化してください。
        </p>
      )}

      {/* ↓　二番目の未完了のToDoの部分 */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* ↓　三番目の完了したToDoの部分 */}
      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
