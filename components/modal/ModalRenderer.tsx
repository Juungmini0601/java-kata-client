'use client'

import {useModalStore} from "@/stores/useModalStore";
import ErrorModal from "@/components/modal/ErrorModal";

export default function ModalRenderer() {
    const {modalType, message, closeModal} = useModalStore();

    if (!modalType) return null;

    switch (modalType) {
        case "ERROR":
            return <ErrorModal message={message} onClose={closeModal}/>
        default:
            return null;
    }
}