import {create} from 'zustand'

import {AuthUserData} from "@/types/auth";

interface AuthUserState {
    user: AuthUserData | null;
    setUser: (user: AuthUserData | null) => void;
}

export const useAuthStore = create<AuthUserState>((set) => ({
    user: null,
    setUser: (user) => set({user}),
}))