import React, { ReactNode } from "react";
import "./style.scss";

interface ModalProps {
    title?: string;
    content?: ReactNode;
    show: boolean;
    close: () => void;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { title = "insert title", content = "insert content" } = props;
    const { show, close } = props;

    return (
        <div className={`modal ${show ? "show" : ""}`}>
            <div className="modal-container">
                <div className="modal-container-header">
                    <h1>{title}</h1>
                    <button className="icon-button" onClick={close}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                        </svg>
                    </button>
                </div>
                <section className="modal-container-body">
                    <div>{content}</div>
                </section>
            </div>
            {props.children}
        </div>
    );
};
