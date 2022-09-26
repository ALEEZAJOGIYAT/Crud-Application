<template>
    <div>
        <div id="heading">
            <h2>Crud Application</h2>        
        </div>
        <div id="form_body">
        <form>
            <div class="form-row">
                <div class="form-group col-md4">
                  <label for="exampleInputTitle">Blog Title</label>
                  <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="titleHelp" placeholder="Enter Title of Blog" v-model="postData.title">
                </div>
                <div class="form-group col-md4">
                  <label for="exampleInputDesc">Blog Description</label>
                  <input type="text" class="form-control" id="exampleInputDesc" placeholder="Write description of Blog" v-model="postData.desc">
                </div>
                <div class="col-md4" id="buttons" >    
                    <button type="submit" class="btn btn-dark" @click.prevent="handlePost" >Post Blog</button>
                </div>
                <!-- <div class="col-md4" id="buttons" v-else>    
                    <button type="submit" class="btn btn-dark" @click.prevent="handlePost" >Update</button>
                </div> -->

            </div>
        </form>
        </div>
        <div class="post-body">            
            <BlogListView :store="store" v-if="showPosts" :postData='postData' :editBlog='editBlog'/>
        </div>
    </div>
</template>


<script>
import BlogListView from './BlogListView.vue';

export default {
    data() {
        return {
            postData:{
                title: "",
                desc: "",

            },

            store: [],
            editBlogs:false,
            editBlog:null
        };
    },
    mounted() {
        if (localStorage.title)
            this.postData.title = localStorage.title;
        if (localStorage.desc)
            this.postData.desc = localStorage.desc;
    },
    methods: {

        handlePost() {
            if(this.editBlog===null){
                localStorage.title = this.postData.title;
                localStorage.desc = this.postData.desc;
                // localStorage.id=localStorage.length+1
                //localstorage.store=[]
                this.store.push({title:localStorage.title, desc:localStorage.desc,
                id: new Date().getTime().toString()});
                console.log(this.store, "store");
                this.showPosts=true
                // alert("u have succesfully created post");
                // this.$router.push('/blog');
            }else{
                this.editBlogs=true
                this.store[this.editBlog].title=this.postData.title
                this.store[this.editBlog].desc=this.postData.desc
                this.editBlog=null
            }
        }
    },
    components: { BlogListView }
}
</script>


<style scoped>
#heading{
    color:rgb(23, 23, 82);
    background-color: beige;
    margin-top: 30px;
    margin-left: 30%;
    width: 20%;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

#form_body{
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-top: 30px;
}
#buttons{
    padding-top: 29px;
    /* margin-top: 50px; */
}
#post-body{
    display: flex;
    flex-direction: row;
    margin-left: 30px;

}
</style>