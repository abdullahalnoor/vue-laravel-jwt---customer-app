<template>
   <div id="main">
     <app-header></app-header>
     <div class="content">
       <router-view></router-view>
     </div>
   </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  name: "main-app",
  components: {
    AppHeader
  }
};
</script>
