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

export async function createFinancier(financier: {valor: number, data: string, categoria: string, descricao: string}) {
    try{
        const request: RequestInfo = new Request(`${API}financier`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(financier)
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


export async function createUser(user: {username: string, password: string, id: number}) {
    try{
        user.id = (await getUsersCount()) + 1; // Gerar um ID único para o novo usuário 
        const request: RequestInfo = new Request(`${API}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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

export async function getUsersCount(){
    try{
        const res = await fetch(API + "users");
        const data = await res.json();
        console.log(data)
        return data.length;
    }
    catch(err){
        console.error(err);
    }
}

export async function getUsers(){
    try{
        const res = await fetch(API + "users");
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch(err){
        console.error(err);
    }
}