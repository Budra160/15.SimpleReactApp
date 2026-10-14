const link = 'https://dummyjson.com/products/category/motorcycle';
const deleteLink = 'https://dummyjson.com/products';

const userLink = 'https://dummyjson.com/users?limit=5';
export async function getProizvod(){

    try{
        const response = await fetch(link);

        if(!response.ok)
            throw new Error();

        const data = await response.json();

        return data.products;
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteProizvod(product){

    try{
        const response = await fetch(deleteLink + "/" + product.id, {
            method:"DELETE",
        });

        if(!response.ok)
            throw new Error();

        const data = await response.json();

        return data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getUsers(){
    try{

        const response = await fetch(userLink);

        if(!response.ok)
            throw new Error();

        const data = await response.json();
        
        return data.users;

    }
    catch(error)
    {

    }
}

