import type { IPost, Post, User } from "@/i-internal";


export default function( users: User[],posts: Post[]): IPost[] {
   return posts.reduce((acc,item)=>{
    const post: IPost = {
        title: item.title,
        id: item.id,
        description: item.body,
        author: users.find(user=> user.id === item.userId)?.name || ""
    };

    
    acc.push(post);
    
        return acc;
   }, [] as IPost[])
}