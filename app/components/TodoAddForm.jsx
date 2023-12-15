import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const TodoAddForm = ({openModal,setOpenModal,todoTask,setTodoTask,addSubmit}) => {
  return (
    <div>
        <dialog id="my_modal_3" className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <h2>Add task</h2>
                <form onSubmit={addSubmit}>
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2" 
                        onClick={()=>setOpenModal(false)}>
                        ✕
                    </button>
                    <div className="mt-6 flex gap-4">      
                        <Input 
                            type="text" 
                            placeholder="add your task...."
                            value={todoTask}
                            onChange={(e)=>setTodoTask(e.target.value)} 
                        />
                        <Button variant="destructive" onClick={()=>setOpenModal(false)}>Submit</Button>
                    </div>
                </form>
            </div>
        </dialog>
    </div>
  )
}

export default TodoAddForm
