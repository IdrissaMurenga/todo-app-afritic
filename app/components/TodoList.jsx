import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


const TodoList = ({taskArray,editClick,deleteTask,checkComplete}) => {
  return (
    <Table className="w-96 mx-auto mt-2">
        <TableHeader>
            <TableRow>
            <TableHead className="font-bold">TASKES</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {taskArray.map((task)=>{
                return(
                  <TableRow className="flex justify-between" key={task.id}>
                      <TableCell className="flex items-center gap-1">
                        <input 
                          type="checkbox"
                          checked={task.complete}
                          onChange={()=>{checkComplete(task.id)}} 
                        />
                        <span className={task.complete ? "line-through text-slate-500 italic":""}>
                          {task.text}
                        </span>
                      </TableCell>
                      <TableCell className="flex gap-3 cursor-pointer">
                          <FaRegEdit size={20} fill="#0F52BA" onClick={() => editClick(task)}/>
                          <FaTrash size={20} fill="red" onClick={() => deleteTask(task.id)} />
                      </TableCell>
                  </TableRow>
                )
            })}
        </TableBody>
    </Table>

  )
}

export default TodoList
