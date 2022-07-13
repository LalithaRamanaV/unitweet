import {useRecoilState} from "recoil"
import {modalState} from "../atom/modalAtom"


function CommentModal() {
    const [open,setOpen] = useRecoilState(modalState);
  return (
    <div>
        <h1>Comment Modal</h1>
        {open && <h1>This modal is open</h1>}
    </div>
  )
}

export default CommentModal