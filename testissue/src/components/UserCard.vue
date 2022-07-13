<template>
    <p>{{ user.name }}</p>
</template>

<script lang="ts">
    import { createApp } from "vue"

    export default createApp ({
        props: {
            user: {
                required: true
            }
        }
    })
</script>