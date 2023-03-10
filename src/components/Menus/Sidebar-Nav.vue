<template>
  <div>
    <span
      v-for="(id, index) in divIds"
      :key="index"
      @click="scrollToElement(id)"
      style="cursor: pointer"
      class="clickable-text"
    >
      {{ id.modifiedId }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    scrollToElement: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      divIds: [],
    };
  },
  mounted() {
    this.getDivIds();
    console.log(this.divIds);

    for (let i = 0; i < this.divIds.length; i++) {
      if (this.divIds[i].originalId == "") {
        this.divIds.splice(i, 1);
        i--; // Update the index since the array was modified
      }
    }
    console.log(this.divIds);
  },

  methods: {
    getDivIds() {
      const divs = document.querySelectorAll("div");
      this.divIds = Array.from(divs)
        .map((div) => div.id)
        .filter((id) => id !== "app") // remove 'app' from the array
        .map((id) => {
          let newId = id.replace(/_/g, " "); // replace all underscores with spaces
          newId = newId.toLowerCase(); // convert to lower case
          newId = newId.replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letter of each word
          newId = newId.replace(/\?/g, "? "); // add space after question mark
          return { originalId: id, modifiedId: newId };
        });
    },
  },
};
</script>
