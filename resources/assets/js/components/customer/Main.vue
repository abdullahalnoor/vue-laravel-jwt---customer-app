<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          Customers
          <router-link class="float-right" to="/customer/new">Add New</router-link>
        </div>
        <div class="card-body">
          <router-view></router-view>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer-main"
};
</script>

