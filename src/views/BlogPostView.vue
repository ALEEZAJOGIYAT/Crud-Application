<template>
    <div class="body">
        <div class="postContent">
            <form>
                <label>Title</label>
                <input type="text" v-model="data.title" />

                <label>Body</label>
                <input type="text" v-model="data.body" />

                <button @click.prevent="handlePost" type="submit" >Post</button>
            </form>            
        </div>
        <br>
        <br>
        <br>
        <br>
        <div>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">actions</th>
    </tr>
  </thead>
  <tbody  v-for="items in postsData" :key="items.id">
    <tr>
      <td>{{items.id}}</td>
      <td>{{items.name}}</td>
      <td><button @click.prevent="deletePost(items.id)">Delete</button></td>
    </tr>
  </tbody>
  </table>

        </div>
    </div>
</template>
<script>

import ShowPosts from "../components/ShowPosts.vue";
import { ref } from "vue";

export default {
    setup(){
        const data=[{title:'',body:''}]
    const handlePost=() =>{
           this.postSubmit = true;
        }

        const postsData=ref([])
        const error = ref(null)
        const deletePost=(id)=>{
            postsData.filter((items,index)=>{
                index!=id
            })

            console.log(id,'iddddddd')

        }

        const load= async ()=>{
            try{
                let data= await fetch("https://632c3fdf5568d3cad880ce4b.mockapi.io/api/v1/user")
                console.log(data)
                if(data.ok){
                    postsData.value = await data.json()
                }else{
                    throw Error("No data available")
                }
            }
            catch(err){
                error.value=err.message
            }

        }

        load()
        return{data,handlePost,postsData,deletePost}
    },
    data(){
        return{
            postSubmit:false
        }
    },
    components: { ShowPosts }
}
</script>


<style scoped>
    #body{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
    }

</style>