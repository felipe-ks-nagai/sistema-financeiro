import { METHODS } from "http";

const API = "http://localhost:3000/";

export async function getFinancier(){
    try{
        const res = await fetch(API + "financier");
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch(err){
        console.error(err);
    }
    
}

export async function deleteFinancier(id:number) {
    try{
        const request: RequestInfo = new Request("API" + "financier", {
            method: 'DELETE',
            
        })
    }
}

