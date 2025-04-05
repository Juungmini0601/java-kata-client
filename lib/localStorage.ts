export const setToken = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export const removeToken = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

export const getToken = () => {
    return {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
    }
}