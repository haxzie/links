<template>
  <div class="page-layout">
    <PageBackground/>
    <div class="card">
      <div class="profile-picture">
        <img
          src="https://github.com/haxzie.png"
          alt="haxzie"
          class="profile-pic"
        />
      </div>
      <div class="profile-area">
        <h1 class="title">Musthaq Ahamad</h1>
        <p class="description">Product Designer • Engineer • Maker</p>
      </div>
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span>{{ tab.name }}</span>
        </div>
      </div>
      <Links v-if="activeTab === 'links'"/>
      <Projects v-else/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Links from "@components/Links.vue";
import Projects from "@components/Projects.vue";
import PageBackground from "@components/PageBackground.vue";

const tabs = [
  {
    id: "links",
    name: "Links",
  },
  {
    id: "projects",
    name: "Projects",
  },
];

const activeTab = ref("links");
</script>

<style lang="scss" scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .card {
    display: flex;
    flex-direction: column;
    background: var(--color-secondary);
    border-radius: 10px;
    border: 1px solid var(--color-border);
    width: 90%;
    max-width: 400px;
    z-index: 1;
  }
  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    align-self: center;
    margin: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .title {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0px 0 5px 0;
    }

    .description {
      font-size: 0.8rem;
      color: var(--color-font-light);
    }
  }

  .tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--color-border);

    .tab {
      padding: 10px 15px;
      border-bottom: 2px solid transparent;
      opacity: 0.6;
      border-bottom: 2px solid transparent;

      span {
        font-weight: 500;
      }
      &.active {
        border-bottom: 2px solid var(--color-primary);
        opacity: 1;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.2s all ease-in-out;
      }
    }
  }
}
</style>
