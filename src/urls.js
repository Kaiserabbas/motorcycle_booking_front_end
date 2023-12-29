let tokenObject=undefined
let request_header=undefined;

if(localStorage.getItem('session_token')){
    tokenObject = JSON.parse(localStorage.getItem('session_token'));
    request_header= {headers: {'Authorization': `Bearer ${tokenObject.token}`,'Content-Type': 'application/json'}}
}

const motorcles_path = 'http://localhost:3000/api/v1/motorcycles';
const login_path = 'http://localhost:3000/api/v1/login';
const users_path = 'http://localhost:3000/api/v1/users/';

export {motorcles_path,login_path,users_path, request_header};
