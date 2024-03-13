<script lang="ts">
export default {
    props:{
        title: String,
        description: String,
        author: String
    }
}
</script>
<template>
    <div class="card">
        <h1 class="card__title">
            {{ title }}
        </h1>
        <p class="card__description">
            {{ description }}
        </p>
        <p class="card__subtitle">
           {{ author }} 
        </p>
    </div>
</template>
<style>
    .card {
        padding: 12px;
        background-color: #fff;
    }

    .card__title {
        max-width: 100%;
        word-break: break-all;
        color: rgb(104, 179, 197);
    }

    .card__description {
        max-width: 100%;
        word-break: break-all;
        font-size: 16px;
    }

    .card__subtitle {
        max-width: 100%;
        word-break: break-all;
        color: #cacaca;
    }
</style>