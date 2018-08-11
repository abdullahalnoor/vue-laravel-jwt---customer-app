<template>
  <div class="row">
     <nav class="nav justify-content-center|justify-content-end">
       <template v-if="!currentUser">
      <router-link class="nav-link" to="/login">Login</router-link>
      <router-link class="nav-link" to="/login">Register</router-link>
       </template>
       <template v-else>
         <router-link class="nav-link" to="/">Customer</router-link>
         <div class="dropdown open">
        <a class="nav-link  dropdown-toggle"  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
                {{currentUser.name}}
            </a>
        <div class="dropdown-menu" aria-labelledby="triggerId">
            <button class="dropdown-item" @click="logout"> Logout</button>
        </div>
    </div> 
         </template> 
     
    </nav>
   
  </div>
</template>
<script>
export default {
  name: "app-header",
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

