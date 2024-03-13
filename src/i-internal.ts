export type Post = {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export type User = {
    address: {
        city: string;
        geo:  { 
            lat: string;
            lng:string;
        }
        street:string;
        suite: string;
        zipcode: string;
        }
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    }
    email: string;
    id: number;
    name: string;
    phone:string;
    username: string;
    website: string;
}

export type IPost = {
    id: number;
    author: string;
    description: string;
    title: string;
}