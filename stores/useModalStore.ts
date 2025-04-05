import {create} from "zustand";

type ModalType = 'ERROR' | null;

interface ModalState {
    modalType: ModalType;
    message: string;
    openModal: (type: ModalType, message: string,) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    modalType: null,
    message: '',
    openModal: (type, message) => set({modalType: type, message: message}),
    closeModal: () => set({modalType: null, message: ''}),
}))