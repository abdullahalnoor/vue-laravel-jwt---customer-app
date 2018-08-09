<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{ welcome }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  computed: {
    welcome() {
      return this.$store.getters.welcome;
    }
  }
};
</script>
