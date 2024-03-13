import type { App } from "vue"
import getPosts from "./get-posts"
import getUsers from "./get-users"


export default {
    install: (app: App) => {
        // Код плагина будет здесь
        app.provide('infra', {
            getPosts,
            getUsers
        })
        app.config.globalProperties.$infra = {
            getPosts,
            getUsers
        }

      }

}