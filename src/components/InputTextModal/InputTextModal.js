
import { useDispatch } from "react-redux"
import { setEditPost, setImgInput, setPostInput, setShow } from "../../features/postsSlice";
import { InputText } from "../InputText/InputText"
import "./InputTextModal.css"

export const InputTextModal = ({ show }) => {

    const dispatch = useDispatch();
    return <>
        {
            show && <div className="input-text-modal-container" onClick={() => (dispatch(setShow(false)), dispatch(setImgInput("")), dispatch(setPostInput("")))}>
                <div className="input-text-modal-container-div">
                    <InputText show={show} />``
                </div>
            </div>
        }
    </>
}