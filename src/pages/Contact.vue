<template>
  <Layout>
    <h2>Contact Me</h2>

    <p>
      If you have a question or feedback, please use the following form to send
      me an email. Also, feel free to follow me at the social sites below.
    </p>

    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="bot-field" /> </label>
      </p>
      <div class="sender-info">
        <div>
          <label for="name" class="label"
            >Name <FA-Icon :icon="['fas', 'asterisk']" class="fa-xs"></FA-Icon
          ></label>
          <input
            type="text"
            name="name"
            v-model="formData.name"
            placeholder="Your name"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label for="email"
            >Email <FA-Icon :icon="['fas', 'asterisk']" class="fa-xs"></FA-Icon
          ></label>
          <input
            type="email"
            name="email"
            v-model="formData.email"
            placeholder="Your email address"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message"
          >Message <FA-Icon :icon="['fas', 'asterisk']" class="fa-xs"></FA-Icon
        ></label>
        <textarea
          name="message"
          v-model="formData.message"
          placeholder="A short message goes here."
          required
          aria-required="true"
        ></textarea>
      </div>

      <button type="submit">Submit form</button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Contact Me"
    };
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang="scss">
form {
  // width: 75%;
  // margin: 0 auto;
}

label,
input,
textarea {
  height: 30px;
  margin: 10px 0;
}

input,
textarea,
button {
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
}

input {
  border: 2px solid rgb(238, 238, 238);
  text-indent: 5px;
}

textarea {
  height: 150px;
  border: 2px solid rgb(238, 238, 238);
  padding: 5px;
}

.sender-info > div {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  & label {
    flex: 1 1 auto;
  }
  & input {
    flex-grow: 1;
  }
}

.message-wrapper {
  display: flex;
  flex-direction: column;
}

@media (max-width: 380px) {
  .sender-info > div {
    flex-direction: column;
  }
}
</style>