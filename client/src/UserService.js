import axios from 'axios';

const url = 'api/users/';

class UserService {
    // get Users
    static getUsers() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(user => ({
                        ...user,
                        createdAt: new Date(user.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    // Create Users
    static insertUser(text) {
        return axios.post(url, {
            text
        });

    }


    // Delete Users
    static deleteUser(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default UserService;