import axios ,{type AxiosResponse}from "axios"
// import type { AxiosResponse } from "axios";
// import  {type AxiosResponse } from "axios";


// npm i -D types/some-library 
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean
    }

// axios.get('https://example.com/data').then(response =>{
//     console.log(response.data);
// })

const fetchData = async () =>{
    try {
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/5"
        )
        console.log("Todo",response.data);
    } catch (error:any) {
        // if(error instanceof Error)
        // {
        //     console.log(error.message);
        // }
        // console.log(error);

        if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}

fetchData()