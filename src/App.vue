<script  lang="ts">
import {type Ref, ref, onMounted, inject, computed } from 'vue';
import Card from '@/components/Card.vue';
import type { IPost, Post, User } from './i-internal';
import postListAdapter from './post-list-adapter';
import type { Infra } from 'env';


export default {
components: {
  Card
},
 setup() {
  const infra = inject<Infra>('infra');
  let users = []  as User[]
  let posts =[] as Post[]
  let postsAdapted =ref( [] as IPost[]);
  const filtredPosts = computed(()=>{
    return postsAdapted.value.filter(item=>item.author.toLowerCase().includes(searchValue.value.toLowerCase()))
  })
  onMounted(async () => {
      if(infra) {
        users = await infra.getUsers()
        posts = await infra.getPosts()
        postsAdapted.value = postListAdapter(users, posts);
      }
  });
  const searchValue: Ref<string> = ref('');
  return {searchValue, filtredPosts};
}

}
</script>

<template>
  <header class="header">
    <input placeholder="Фильровать по автору" type="text" v-model.trim="searchValue">
  </header>
  <main class="main">
    <div class="container main__container">
      <ul class="main__list list">
        <li v-for="item of filtredPosts" class="list__item">
          <Card class="list__card" v-bind="item"></Card>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>

.list {
  display: flex;
  flex-wrap: wrap;
  margin: -12px -6px 0 -6px;
  height: 100%;

}

.list__item {
  flex: 0 0 calc(25% - 12px);
  padding: 0 6px;
  margin-top: 12px;
}

.list__card {
  height: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 1200px) {
  .list {
 padding: 0 12px;
  
}
}

@media screen and (max-width: 992px) {
  .list__item {
  flex: 0 0 calc(33.33% - 12px);
  
}
}
@media screen and (max-width: 768px) {
  .list__item {
  flex: 0 0 calc(50% - 12px);
  
}
}
@media screen and (max-width: 576px) {
  .list__item {
  flex: 0 0 calc(100%);
  padding: 0;
}

.list {
  margin: -12px 0 0 0;

}
}

</style>
