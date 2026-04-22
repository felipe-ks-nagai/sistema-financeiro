

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
        const request: RequestInfo = new Request(`${API}financier/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.error(err);
    }
}

