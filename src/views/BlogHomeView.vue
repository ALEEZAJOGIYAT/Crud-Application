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
                  <input type="text" class="form-control" id="exampleInputTitle" aria-describedby="titleHelp" placeholder="Enter Title of Blog" v-model="title">
                </div>
                <div class="form-group col-md4">
                  <label for="exampleInputDesc">Blog Description</label>
                  <input type="text" class="form-control" id="exampleInputDesc" placeholder="Write description of Blog" v-model="desc">
                </div>
                    <div class="col-md4" id="buttons">    
                    <button type="submit" class="btn btn-dark" @click.prevent="persist" >Submit</button>
                    </div>

            </div>
            </form>


        </div>

    </div>
</template>


<script>

export default {
    data(){
        return{
            title:"",
            desc:""
        }
    },
    mounted() {
    if(localStorage.title) this.title = localStorage.title;
    if(localStorage.desc) this.desc = localStorage.desc;
  },
  methods: {
    persist() {
      localStorage.title = this.title;
      localStorage.desc = this.desc;
      console.log('stored in local storage');
    }
}


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
</style>