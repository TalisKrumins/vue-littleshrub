<script setup>
import { defineProps } from "vue";
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  title: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  description: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  col: {
    type: String,
    default: "",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div :class="`${col ? col : 'flex left'}`">
    <div v-bind="$attrs" class="info">
      <i
        v-if="icon"
        class="material-icons text-gradient"
        :class="`${
          typeof icon == 'object'
            ? `text-${icon.color} text-${icon.size}`
            : 'text-success text-3xl'
        }`"
        >{{ typeof icon == "object" ? icon.component : icon }}</i
      >
      <img v-if="image" :src="image.component" :class="image.class" />
      <h2
        :class="
          typeof title == 'string' ? 'font-weight-bolder mt-3' : title.class
        "
      >
        {{ typeof title == "string" ? title : title.text }}
      </h2>
      <p
        v-if="typeof description == 'string'"
        class="pe-0"
        v-html="description.replace(/\n/g, '<br>')"
      ></p>
      <p
        v-else
        :class="description.class"
        v-html="description.text.replace(/\n/g, '<br>')"
      ></p>
    </div>
  </div>
</template>
