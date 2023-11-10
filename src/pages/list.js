// import { useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import AddTask from "../AddTask/AddTask";
// import { useDispatch } from "react-redux";
// import { Remove, Add } from "../redux/AddTask";
// import { useSelector } from "react-redux";

// const List = () => {
//   const [addTaskModal, setAddTaskModal] = useState(false);
//   const tasks = useSelector((state) => state.addTask);
//   const dispatch = useDispatch();

//   const removeHandle = (idx) => {
//     dispatch(Remove(idx));
//   };

//   const addTask = (task) => {
//     dispatch(Add(task));
//     setAddTaskModal(false);
//   };

//   return (
//     <div className="App w-full h-screen flex justify-center items-center">
//       <div className="w-4/5 md:w-1/2 lg:w-4/12 2xl:w-1/5 m-auto h-2/3 overflow-auto bg-white rounded-md drop-shadow-xl border relative">
//         <div className="w-full sticky top-0 bg-blue-500 text-gray-200 p-4 flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-semibold">To Do List App</h1>
//             <p className="text-xs">manage your tasks</p>
//           </div>
//           <div className="w-8 h-8 bg-white text-black rounded-full flex justify-center items-center">
//             <button>
//               <AiOutlinePlus onClick={() => setAddTaskModal(true)} size={"1rem"} />
//             </button>
//           </div>
//         </div>

//         <div className="p-5 text-black">
//           <ul className="space-y-4">
//             {tasks &&
//               tasks.map((task, idx) => {
//                 return (
//                   <div key={idx} className="bg-gray-100 flex justify-between">
//                     <div className="flex space-x-4 p-4 items-center">
//                       <div>
//                         <h2 className="text-lg font-semibold">{task.title}</h2>
//                         <p>{task.description}</p>
//                       </div>
//                     </div>
//                     <button
//                       className="text-red-500 p-2"
//                       onClick={() => {
//                         removeHandle(idx);
//                       }}
//                     >
//                       <MdDelete size={"1.5rem"} />
//                     </button>
//                   </div>
//                 );
//               })}
//           </ul>
//         </div>
//       </div>
//       {addTaskModal && <AddTask addTask={addTask} setAddTaskModal={setAddTaskModal} />}
//     </div>
//   );
// };

// export default List;
