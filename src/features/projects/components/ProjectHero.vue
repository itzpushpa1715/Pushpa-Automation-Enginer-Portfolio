<script setup lang="ts">
import Tag from "../../../components/Tag.vue";
import Button from "../../../components/Button.vue";
import { t } from "../../../i18n/utils/translate";
import Link from "../../../components/Link.vue";
import { projectId } from "../../../composables/useRouteObserver";
import { ref, watch } from "vue";

import type { ProjectContent } from "../../../content/types";

const { content } = defineProps<{
  content: ProjectContent;
}>();

const animationKey = ref(0);

// Force animation restart when projectId changes
watch(projectId, () => {
  animationKey.value++;
});
</script>

<template>
  <div class="project-hero grid">
    <div class="project-hero-meta">
      <span v-if="content.caseStudy?.category" class="project-hero-category">
        {{ content.caseStudy.category }}
      </span>
      <span v-if="content.caseStudy?.period">{{ content.caseStudy.period }}</span>
      <span v-if="content.caseStudy?.status">{{ t(`project-status-${content.caseStudy.status}`) }}</span>
      <div v-if="!content.caseStudy" class="project-hero-tags">
        <Tag v-for="tag in content.tags" :key="tag" :variant="tag" />
      </div>
    </div>
    <div class="project-hero-title-wrapper">
      <h1 class="project-hero-title" :key="animationKey">
        {{ content.title }}
      </h1>
    </div>
    <p v-if="content.description" class="project-hero-description" v-html="content.description"></p>
    <div class="project-hero-buttons">
      <Link v-if="content.live" :href="content.live" external class="project-hero-button" data-cursor="arrow-external">
        <Button renderAs="div" variant="accent" class="children-unclickable" data-hoversound="hover">{{
          t("live-view")
        }}</Button>
      </Link>
      <Link
        v-if="content.source"
        :href="content.source"
        external
        class="project-hero-button"
        data-cursor="arrow-external"
      >
        <Button renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">{{
          t("source-code")
        }}</Button>
      </Link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-hero {
  padding: 0 var(--space-outer);
  padding-top: calc(var(--height-header) + var(--space-xxl));
  padding-bottom: var(--space-xxl);

  @include mixins.mq("md") {
    padding-top: calc(var(--height-header) + var(--space-xxxl));
    padding-bottom: var(--space-xxxl);
  }

  &-button {
    flex: 0.5;

    @include mixins.mq("md") {
      width: fit-content;
    }
  }

  &-buttons {
    grid-row: 4;
    grid-column: 1 / 13;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-sm);
    margin-top: var(--space-md);
    width: 100%;

    @include mixins.mq("md") {
      gap: var(--space-md);
      width: fit-content;
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 10;
    }
  }

  &-video {
    grid-column: 1 / span 12;
    align-self: center;

    @include mixins.mq("md") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 8;
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-title-md);
    color: var(--color-text-400);
    line-height: var(--line-height-title);
    transform: translateY(0%);
    animation: project-hero-title-visible 0.5s var(--ease-smooth);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xxl);
    }

    @keyframes project-hero-title-visible {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }

  &-description {
    color: var(--color-text-400);
    line-height: var(--line-height-copy);
    grid-row: 3;
    grid-column: 1 / 13;
    align-self: start;
    max-width: 760px;
    font-size: var(--font-size-md);

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 11;
    }
  }

  &-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-sm) var(--space-lg);
    grid-row: 1;
    grid-column: 1 / 13;
    color: var(--color-text-300);
    font-size: var(--font-size-sm);
    text-transform: uppercase;

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }

  &-category {
    color: var(--color-orange-400);
    font-weight: 700;
  }

  &-title-wrapper {
    grid-row: 2;
    grid-column: 1 / 13;
    overflow: hidden;

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
  }
}
</style>
