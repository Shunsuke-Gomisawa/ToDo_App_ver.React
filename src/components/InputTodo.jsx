import React from "react";

//CSS in JSXのためにstyleオブジェクトを宣言
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

//JSX
//この部分はhooks登場以前はクラスコンポーネントが使用されていたため
//"render"によるエレメントを使った表記が主流だった
//なので今の案件ではクラスコンポーネントが多用されているため
//下記のような描き方はされていない
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 下行の最右、onChangeコマンドによりレンダリングによる強制初期化を回避している */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
