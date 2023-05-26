import { useState } from "react";

import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";

const main = () => {
  const [todo, setTodos] = useState<ITodo[]>([
    {
      isFinish: false,
      text: "membuat todo list",
    },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (text: string) => {
    setInput("");
    setTodos((prev) => {
      const newTodo: ITodo[] = [
        ...prev,
        {
          isFinish: false,
          text,
        },
      ];
      return [...newTodo];
    });
  };

  const checkTodo = (i: number) => {
    const prev = todo;
    prev[i].isFinish = !prev[i].isFinish;
    setTodos([...prev]);
  };

  const deleteTodo = (i: number) => {
    setTodos((prev) => {
      const newArr: ITodo[] = prev;
      newArr.splice(i, 1);
      return [...newArr];
    });
  };

  return (
    <body className="flex flex-col scroll-smooth bg-slate-900 h-screen items-center">
      <div className="p-4">
        <h2 className="text-xl text-white mt-4 mb-4">TODO LIST : </h2>

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="insert your task"
            className="p-2"
            onChange={(evt) => {
              const text = evt.target.value;
              setInput(text);
            }}
            value={input}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4"
            onClick={() => {
              if (input.length !== 0) {
                addTodo(input);
              }
            }}
          >
            add task
          </button>
        </div>
        <div className="mt-4">
          {todo.map((item, i) => {
            return (
              <div className="flex flex-row items-center">
                <h2
                  className={
                    item.isFinish
                      ? "text-lg text-white line-through"
                      : "text-lg text-white"
                  }
                >
                  {i + 1}. {item?.text}
                </h2>
                <button onClick={() => checkTodo(i)}>
                  <AiOutlineCheck
                    className={
                      item.isFinish
                        ? "text-green-400 text-2xl mr-2 ml-10"
                        : "text-red-500 text-2xl mr-2 ml-10"
                    }
                  />
                </button>
                <button onClick={() => deleteTodo(i)}>
                  <AiFillDelete className="text-blue-500 text-2xl" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
};

export default main;

interface ITodo {
  isFinish: boolean;
  text: string;
}
