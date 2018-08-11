<template>
  <div>
    <form action="" @submit.prevent="add">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="customer.name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" v-model="customer.email">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label for="website">website</label>
        <input type="text" class="form-control" v-model="customer.website">
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success btn-block" value="New Customer">
      </div>

    <ul v-for="(fielsError,fieldName) in errors" :key="fieldName">
      <li> {{ fieldName }} -  {{ fielsError.join('/n') }} </li>
    </ul>

    </form>
  </div>
</template>
<script>
import validate from "validate.js";
export default {
  data() {
    return {
      customer: {
        name: "",
        email: "",
        phone: "",
        website: ""
      },
      errors: null
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    add() {
      this.errors = null;
      const constraints = this.getCredentials();

      // const errors = validate(this.$data.customer, constraints);

      // if (errors) {
      //   this.errors = errors;
      //   return;
      // }

      axios
        .post("/api/customer/new", this.$data.customer, {
          headers: {
            authorization: `Bearer ${this.currentUser.token}`
          }
        })
        .then(res => {
          this.$router.push("/customer");
        });
    },
    getCredentials() {
      return {
        name: {
          presence: true,
          length: {
            minimum: 3,
            message: "Must be at Least 3 Character Length"
          }
        },
        email: {
          presence: true,
          email: true
        },
        phone: {
          presence: true,
          numericality: true,
          length: {
            minimum: 10,
            message: "Must be at Least 10 Character Length"
          }
        },
        website: {
          presence: true,
          url: true
        }
      };
    }
  }
};
</script>

