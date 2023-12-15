import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const TodoEditForm = ({newModal,setNewModal,editTodo,editOnChange,handleEdit}) => {
  return (
    <div>
      <dialog id="my_modal_3" className={`modal ${newModal ? "modal-open" : ""}`}>
          <div className="modal-box">
              <h2>Update Task</h2>
              <form onSubmit={handleEdit}>
                  <button 
                    className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2" 
                    onClick={()=>setNewModal(false)}>
                    ✕
                  </button>
                  <div className="mt-6 flex gap-4">      
                      <Input 
                          type="text" 
                          placeholder="update your task...."
                          value={editTodo.text}
                          onChange={editOnChange} 
                      />
                      <Button variant="destructive" onClick={()=>setNewModal(false)} >Update</Button>
                  </div>
              </form>
          </div>
      </dialog>
    </div>
  )
}

export default TodoEditForm
