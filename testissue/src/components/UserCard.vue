<template>
<p>{{ user.name }}</p>
</template>

<script lang="ts"> 
    export default {
        props: {
            user: {
                required: true
            }
        }
    }
</script>