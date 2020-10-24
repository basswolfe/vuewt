<template>
  <aside>
    <h3>Sign In Anonymously</h3>
    <button @click="auth.signInAnonymously()">Sign In</button>

    <div v-if="newUser" class="login-type">
      <h3>Create Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>
    <div v-else>
      <h3>Sign In</h3>
      <a href="#" @click="newUser = true">Create an Account</a>
    </div>

    <label>
      Email
      <input v-model="email" type="email" placeholder="email" class="input" />
    </label>
    <label>
      Password
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="input"
      />
    </label>

    <button class="button is-info" :class="{ 'is-loading': loading }" @click="signInOrCreateUser()">
      {{ newUser ? 'Sign Up' : 'Login'}}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
import { auth } from '../firebase'

export default {
  data() {
    return {
      auth,
      newUser: false,
      email: '',
      password: '',
      loading: false,
      errorMessage: ''
    }
  },

  methods: {
    async signInOrCreateUser() {
      this.loading = true;

      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password)
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password)
        }
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.login-type {
  display: flex;
  justify-content: space-between;
}
</style>
