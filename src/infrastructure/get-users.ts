import type { User } from "@/i-internal";

export default   function(): Promise<User[]> {
    return  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>  res.json())
}