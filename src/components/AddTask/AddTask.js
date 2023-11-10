import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
      <div className="w-[400px] bg-white rounded">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between text-black">
            <h1 className="text-xl font-semibold">Add New Task</h1>
            <button onClick={closeHandle}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <input
            type="text"
            placeholder="Task Title"
            className="w-full outline-0 p-2 text-black"
            autoFocus
            onChange={inputTitleHandle}
          />
          <textarea
            placeholder="Task Description"
            className="w-full h-20 outline-0 p-2 text-black"
            onChange={inputDescriptionHandle}
          />
          <button
            className="w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-blue-500"
            onClick={addTaskHandler}
          >
            <IoAddCircleOutline size={"1.1rem"} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
