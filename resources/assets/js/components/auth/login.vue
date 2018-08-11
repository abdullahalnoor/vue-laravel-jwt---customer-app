<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          User Loging 
        </div>
        <div class="card-body">
          <form action="" @submit.prevent="authenticate">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="form.email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="form.password">
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn btn-success btn-block">
            </div>
            <div class="row justify-content-center">
              <p class="text-danger" v-if="authError">
                {{authError}}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../helpers/auth";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    authenticate() {
      this.$store.dispatch("login");
      login(this.$data.form)
        .then(res => {
          this.$store.commit("loginSuccess", res);
          this.$router.push("/");
        })
        .catch(error => {
          this.$store.commit("loginFailed", { error });
        });
    }
  },

  computed: {
    authError() {
      return this.$store.getters.authError;
    }
  }
};
</script>
