<template>
    <div>
        <!-- <div id="heading">
            <h3>Show Posts</h3>
        </div> -->
        <div id="post-btn">
            <button @click.prevent="handleAddPost" class="btn btn-dark" >Add New Post</button>
        </div>
        <div id="post-content" v-for="(blog,index) in store" :key="blog.id">
            <div class="card" style="width: 18rem;">
  <div class="card-body" >
      <h5 class="card-title" v-if="!editTask">title:
          
          {{blog.title}}</h5>
    <p class="card-text">{{blog.desc}}</p>
    <p class="card-text">{{index}}</p>

    <div id="delBtn">
        <button class="btn btn-dark" type="button" @click="handleEdit(index)">
            Edit
        </button>

        <button type="button" class="btn btn-danger" style="margin-left: 10px;" data-toggle="modal" data-target="#exampleModal">
            Delete
        </button>
<!-- 
        <input type="text" v-model="title" v-if="editTask"  /> -->


    </div>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are u sure you want to delete that post?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="handleDelete(blog.id)" style="margin-left: 10px;">Yes</button>

                <!-- <button type="button" class="btn btn-dark" @click="handleDelete(items.id)">Yes</button> -->
              </div>
            </div>
          </div>
        </div>
    </div>
    

  
</div>

        </div>

    </div>
</template>
<script>

import ShowPosts from "../components/ShowPosts.vue";
//create blog
//blog listing

export default {
    props:['store','postData','editBlog'],
    data(){
        return{
            postSubmit:false,
        }
    },
    //mounted
    methods:{
        handleAddPost(){
            this.$router.push('/') 

        },
        handleDelete: function(blog_id){
    this.store.splice(this.store.indexOf(blog_id), 1);
},
    handleEdit(blog_id){
        console.log(blog_id)
        // const blog=this.store.find((blogs)=>{
        //     blogs.id == blog_id
        // })
        // console.log(blog)
        console.log(this.store[blog_id],'blog id');
      this.postData.title=  this.store[blog_id].title
     this.postData.desc=  this.store[blog_id].desc
     this.editBlog=[blog_id]

    },
    // handleEdit: function(blog_id){
    //   this.postData.title=  this.store.indexOf(blog_id).title
    //   this.postData.desc=  this.store.indexOf(blog_id).desc

    //          console.log(this.store[blog_id],'blog id');
    //      }
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
    #heading{
    color:rgb(23, 23, 82);
    background-color: beige;
    margin-top: 30px;
    margin-left: 30%;
    width: 20%;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#post-content{
    margin-left: 30px;
    display:flex;
    flex-direction: row;
    margin-top: 15px;
}

#post-btn{
    margin-left: 55%;

}

#delBtn{
    margin-left: 10px;

}

</style>