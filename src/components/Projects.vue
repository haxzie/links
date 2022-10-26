<template>
  <div class="projects">
    <a
      v-for="link in links"
      :key="link.id"
      class="link"
      :href="`${link.link}`"
    >
      <div class="icon">
        <div class="bg" :style="{ background: link.color }"></div>
        <component
          :is="link.icon"
          size="40"
          :color="link.color"
          class="svg-icon"
        />
      </div>
      <div class="texts">
        <h2>{{ link.name }}</h2>
        <p>{{ link.description }}</p>
      </div>
    </a>

    <a href="https://haxzie.com/projects" class="view-all-link"
      >View All Projects <ArrowForwardIcon class="icon" size="18"
    /></a>
  </div>
</template>

<script setup lang="ts">
import StreamonLogo from "@components/icons/StreamonLogo.vue";
import SnippInLogo from "@components/icons/SnippinLogo.vue";
import KrataLogo from "@components/icons/KrataLogo.vue";
import ArrowForwardIcon from "@components/icons/ArrowForwardIcon.vue";

const links = [
  {
    id: "snipp",
    name: "Snipp",
    description: "In browser snippet manager and editor",
    link: "https://snipp.in",
    icon: SnippInLogo,
  },
  {
    id: "krata",
    name: "Krata",
    description: "Create and edit GeoJSON maps",
    link: "https://krata.app",
    icon: KrataLogo,
  },
  {
    id: "streamon",
    name: "Streamon",
    description: "Live stream to Instagram via OBS",
    link: "https://getstreamon.com",
    icon: StreamonLogo,
  },
];
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 360px;
  overflow: auto;

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 10px;

    .icon {
      width: 40px;
      height: 40px;
      //border: 1px solid var(--color-border);
      margin-right: 15px;
      border-radius: 12.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-font-light);
      position: relative;
      overflow: hidden;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        opacity: 0.1;
      }
    }

    .texts {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: 500;
      }

      p {
        font-size: 0.8rem;
        color: var(--color-font-light);
      }
    }

    &:hover {
      cursor: pointer;
      background: var(--color-secondary-light);
    }
  }

  .view-all-link {
    display: flex;
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--color-border);
    color: var(--color-font);
    font-weight: 500;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .icon {
        margin-left: 10px;
    }

    &:hover {
      cursor: pointer;
      background: var(--color-secondary-light);
    }
  }
}
</style>
