import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddTask from "../AddTask/AddTask";
import { useDispatch } from "react-redux";
import { Remove, Add } from "../../redux/AddTask";
import { useSelector } from "react-redux";

const List = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const tasks = useSelector((state) => state.addTask);
  const dispatch = useDispatch();

  const removeHandle = (idx) => {
    dispatch(Remove(idx));
  };

  const addTask = (task) => {
    dispatch(Add(task));
    setAddTaskModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-500">
      <div className="w-full max-w-screen-md m-auto h-2/3 overflow-auto bg-white rounded-md shadow-xl border relative p-4">
        <div className=" sticky top-0 bg-blue-500 text-gray-200 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Lista de Tarefas
            </h1>
            <p className="text-base max-w-[400px] text-gray-900">
              Gerencie suas tarefas de forma eficiente.
            </p>
          </div>

          <div className="w-8 h-8 bg-white text-black rounded-full flex justify-center items-center">
            <button onClick={() => setAddTaskModal(true)}>
              <AiOutlinePlus size={"1rem"} />
            </button>
          </div>
        </div>

        <div className="p-5 text-black sm:flex-row">
          <ul className="space-y-4">
            {tasks &&
              tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 flex flex-col sm:flex-row justify-between items-center p-4 "
                >
                  <div className="flex flex-col text-sm sm:text-md md:text-lg">
                    <h2 className="text-xl font-semibold mb-2">{task.title}</h2>

                    <p className="text-sm sm:text-md md:text-lg lg:text-lg">
                      {task.description}
                    </p>
                  </div>

                  <div className="flex items-center mt-4 sm:mt-0">
                    <button
                      className="text-red-500 p-2"
                      onClick={() => {
                        removeHandle(idx);
                      }}
                    >
                      <MdDelete size={"1.9rem"} />
                    </button>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      </div>
      {addTaskModal && (
        <AddTask addTask={addTask} setAddTaskModal={setAddTaskModal} />
      )}
    </div>
  );
};

export default List;
