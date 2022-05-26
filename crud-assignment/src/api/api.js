import axios from "axios";
export function getAllData(){
  const data = axios.get('https://628e2ead368687f3e711eca5.mockapi.io/myFakeData')
    return data;
    
}


export function updateData(id, body){
     axios.post(`https://628e2ead368687f3e711eca5.mockapi.io/myFakeData/${id}`, body);
}
export function AddData(body){
     axios.post(`https://628e2ead368687f3e711eca5.mockapi.io/myFakeData/`, body);
}


export function deleteData(id){
    axios.delete(`https://628e2ead368687f3e711eca5.mockapi.io/myFakeData/${id}`);
    
}


