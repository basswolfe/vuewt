<template>
  <aside>
    <h3>Sign In Anonymously</h3>
    <button @click="auth.signInAnonymousely()">Sign In</button>
  </aside>
</template>

<script>
import { auth } from '../firebase'

export default {
  data() {
    return {
      auth,
    }
  }
}
</script>