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

    for (let i = 0; i < this.divIds.length; i++) {
      if (this.divIds[i].originalId == "") {
        this.divIds.splice(i, 1);
        i--; // Update the index since the array was modified
      }
    }
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
<style>
.sidebar {
  position: sticky;
  top: 20%;
  width: 200px;
  height: 100%;
  background-color: white;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  overflow: auto;
}
.clickable-text {
  display: block;
  margin-bottom: 10px;
  padding: 0px;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
}
.clickable-text:hover {
  background-color: #d0d0d0;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

.main {
  width: 80%;
  height: 200vh;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
}

.main,
.sidebar {
  color: black;
  background-color: primary;
  border-radius: 10px;
  padding: 25px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

code,
pre {
  background-color: #ccc;
  padding: 0 3px;
  border-radius: 5px;
}

.bottom {
  justify-self: bottom;
}
</style>
