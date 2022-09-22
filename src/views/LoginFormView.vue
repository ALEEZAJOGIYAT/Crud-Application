<template>
    <h2>hello from blog post vue</h2>
    <div class="body">
        <div class="postContent">
            <form>
                <label>Name</label>
                <input type="text" v-model="name" />

                <label>Email</label>
                <input type="text" v-model="email" />

                <label>Password</label>
                <input type="text" v-model="password" />

            </form>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            
        }
    }

   
}
</script>
