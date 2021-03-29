import { usersInformation } from "../database/users";

export const getUser = (username, password) => {
    const data = usersInformation.find(info => (info.username === username) && info.password === password) || false;
    if (data) {
        return { data, error: false }
    } else {
        return { data: {}, error: 'Usuario no registrado' }
    }

};
