<template>
  <div class="home-index">
    <f7-list inline-labels no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        clear-button
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        clear-button
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        clear-button
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="URL"
        type="url"
        placeholder="URL"
        clear-button
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Your phone number"
        clear-button
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Gender"
        type="select"
        defaultValue="Male"
        placeholder="Please choose..."
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birthday"
        type="date"
        defaultValue="2014-04-30"
        placeholder="Please choose..."
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Date time"
        type="datetime-local"
        placeholder="Please choose..."
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Range"
        :input="false"
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
        <f7-range slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input
        label="Textarea"
        type="textarea"
        placeholder="Bio"
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <f7-list-input
        label="Resizable"
        type="textarea"
        resizable
        placeholder="Bio"
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>
    </f7-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
