import { useState } from "react";
import { useSelector } from "react-redux";
import { InputText } from "../InputText/InputText"
import "./InputTextModal.css"

export const InputTextModal = ({ show, setShow }) => {

    const { imgInput } = useSelector((state) => state.posts);
    return <>
        {
            show && <div className="input-text-modal-container" onClick={() => setShow(false)}>
                <div className="input-text-modal-container-div">
                    <InputText show={show} setShow={setShow} />``
                </div>
            </div>
        }
    </>
}