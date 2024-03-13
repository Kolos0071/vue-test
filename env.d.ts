/// <reference types="vite/client" />

import type { Post, User } from "@/i-internal";
import type infrastructure from "@/infrastructure";

export type Infra = {
  getPosts():Peomise<Post[]>, 
  getUsers():Peomise<User[]>
}


declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
      $infra: Infra;
  }
}