<template>
  <div class="links">
    <a
      v-for="link in links"
      :key="link.id"
      class="link"
      :href="`https://${link.link}`"
    >
      <div class="icon">
        <div class="bg" :style="{ background: link.color }"></div>
        <component :is="link.icon" size="24" :color="link.color" class="svg-icon"/>
      </div>
      <div class="texts">
        <h2>{{ link.name }}</h2>
        <p>{{ link.link }}</p>
      </div>
    </a>
  </div>
</template>
<script setup lang="ts">
import WebsiteIcon from "@components/icons/WebsiteIcon.vue";
import TwitterIcon from "@components/icons/TwitterIcon.vue";
import GitHubIcon from "@components/icons/GitHubIcon.vue";
import DribbbleIcon from "@components/icons/DribbbleIcon.vue";
import InstagramIcon from "@components/icons/InstagramIcon.vue";

const links = [
  {
    id: "website",
    name: "Website",
    link: "haxzie.com",
    icon: WebsiteIcon,
    color: "#1f65de"
  },
  {
    id: "insta",
    name: "Instagram",
    link: "instagram.com/haxzie",
    icon: InstagramIcon,
    color: "#c0007a"
  },
  {
    id: "twitter",
    name: "Twitter",
    link: "twitter.com/haxzie_",
    icon: TwitterIcon,
    color: "#00acee"
  },
  {
    id: "github",
    name: "GitHub",
    link: "github.com/haxzie",
    icon: GitHubIcon,
    color: "#ffffff",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    link: "dribbble.com/haxzie",
    icon: DribbbleIcon,
    color: "#ea4c89"
  },
];
</script>
<style lang="scss" scoped>
.links {
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
}
</style>
