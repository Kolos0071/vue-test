import type { Post } from "@/i-internal";

export default function():Promise<Post[]> {
    return  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
}