<template>
    <div>
        <h2>Users</h2>
        <UserCard v-for="user in userData" :key="user.id" user="user" />
    </div>
</template>

<script lang="ts">
import { createApp } from 'vue';
import UserCard from './UserCard.vue';
import User from '../interface/UserInterface';

export default createApp ({
    data() {
        return {
            userData: [] as Array<User>
        }
    },

    mounted() {
    try {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => {
            if (!response || response.status === 404) {
                throw new Error('There are No Users');
            }
            return response.json();
            })
        .then((data) => {
            if (Array.isArray(data)) {
                this.userData = data;
            } else throw new Error('Invalid Data Format')
        })
    }
    catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        else throw new Error('Internal Server Error');
    }
}
})

</script>

<style scoped>
    div {
        margin: auto;
        width: 80%;
    }

    h2 {
        text-align: center;
        color: rgba(0, 0, 0, 0.616);
        font-size: 1.8em;
    }
</style>