<template>
    <div>
        <div v-for="post in postsData" :key="post.id">
            <ul>
                <li>{{post}}</li>
            </ul>

        </div>
    </div>
</template>


<script>

export default {
    data(){
        console.log(props,'props')
        return{
            props:["postsData"]
        }
    }
}
</script>
