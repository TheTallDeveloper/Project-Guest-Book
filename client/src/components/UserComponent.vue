<template>
  <div class="container">
    <h1>Hello Bitches!</h1>
 <div class="create-user">
   <label for="create-user">Message: </label>
   <input type="text" id="create-user" v-model="text" placeholder="Enter message">
   <button v-on:click="createUser">Save!</button>
 </div>
  <hr> 
  <p class= "error" v-if="error">{{ error }}</p>
  <div class="users-container">
    <div class="user"
    v-for="(user, index) in user" 
    v-bind:item="user"
    v-bind:index="index"
    v-bind:key="user._id"
    v-on:dblclick="deleteUser(user._id)">

    
{{ `${user.createdAt.getDate()}/${user.createdAt.getMonth()+1}/${user.createdAt.getFullYear()}`}}

    <p class="text">{{user.text}}</p>
    </div>
  </div>
</div>
</template>

<script>
import UserService from '../UserService';

export default {
  name: 'UserComponent',
  data(){
    return {
      user: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.user = await UserService.getUsers();
    } catch(err){
      this.error = err.message;

    }
  },
  methods: {
    async createUser(){
      await UserService.insertUser(this.text);
      this.user = await UserService.getUsers();
    },
    async deleteUser(id){
      await UserService.deleteUser(id);
      this.user = await UserService.getUsers();
    }
  },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin:  0 auto;

}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.user {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
