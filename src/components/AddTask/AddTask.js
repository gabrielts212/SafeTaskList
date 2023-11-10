import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTask = ({ addTask, setAddTaskModal }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const closeHandle = () => {
    setAddTaskModal(false);
  };

  const inputTitleHandle = (e) => {
    const { value } = e.target;
    setInputTitle(value);
  };

  const inputDescriptionHandle = (e) => {
    const { value } = e.target;
    setInputDescription(value);
  };

  const addTaskHandler = () => {
    if (inputTitle && inputDescription) {
      addTask({ title: inputTitle, description: inputDescription });
      setInputTitle("");
      setInputDescription("");
    }
  };

  return (
    <div className="w-full h-screen bg-black/30 absolute flex justify-center items-center">
      <div className="w-[90%] md:w-[400px] bg-white rounded-md">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between items-center text-black">
            <h1 className="text-xl md:text-2xl font-semibold">
              Adicionar nova tarefa
            </h1>
            <button onClick={closeHandle}>
              <AiOutlineClose size={"1.3rem"} />
            </button>
          </div>
          <input
            type="text"
            placeholder="Título da tarefa"
            className="w-full outline-none p-2 text-black border border-gray-300 rounded-md"
            autoFocus
            onChange={inputTitleHandle}
          />
          <textarea
            placeholder="Descrição da tarefa"
            className="w-full h-20 outline-none p-2 text-black border border-gray-300 rounded-md"
            onChange={inputDescriptionHandle}
          />
          <button
            className="w-full md:w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-blue-500 text-white"
            onClick={addTaskHandler}
          >
            <IoAddCircleOutline size={"1.5rem"} />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
