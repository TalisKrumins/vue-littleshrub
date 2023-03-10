<template>
  <nav>
    <ul>
      <li v-for="(children, parent) in menu" :key="parent" class="nav-tabs">
        <span class="parent-link">{{ parent }}</span>
        <ul>
          <li v-for="child in children" :key="child.name" class="nav-link">
            <router-link :to="child.path" class="child-link">{{
              child.name
            }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["menu"],
};
</script>
