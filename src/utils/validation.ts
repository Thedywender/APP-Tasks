export const validateUsername = (username: string) => {
    return username.length >= 8;
};

export const validatePassword = (password: string) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return password.length >= 8 && regex.test(password);
};