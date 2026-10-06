<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import ProjectHero from "./ProjectHero.vue";
import ProjectComponent from "./ProjectComponent.vue";
import Link from "../../../components/Link.vue";
import NextProject from "./NextProject.vue";
import { locale } from "../../../i18n/store";
import { previews } from "../../../content/projects/previews";
import { ref, computed, watch, onMounted } from "vue";
import { t } from "../../../i18n/utils/translate";

import type { ProjectContent, ProjectPreview } from "../../../content/types";

const { content, projectId } = defineProps<{
  content: ProjectContent;
  projectId: string;
}>();

const loadedPreviews = ref<ProjectPreview[] | null>(null);

const loadPreviews = async () => {
  const module = await previews[locale.value as keyof typeof previews]();
  loadedPreviews.value = module.default;
};

const nextProject = computed(() => {
  const previews = loadedPreviews.value;
  if (!previews) return null;

  const currentIndex = previews.findIndex((p) => p.slug === projectId);
  if (currentIndex === -1) return null;

  const nextIndex = (currentIndex + 1) % previews.length;

  return previews[nextIndex];
});

const projectComponents = computed(() =>
  (content.components ?? []).filter((component) => {
    if (
      component.type === "media" &&
      component.props.type === "image" &&
      component.props.src === content.heroImage?.src
    ) {
      return false;
    }

    return !content.caseStudy || component.type === "media";
  }),
);

const projectTools = computed(() => {
  if (content.caseStudy) return content.caseStudy.tools;

  return (content.components ?? [])
    .filter((component) => component.type === "text" && component.props.title?.toLowerCase() === "tools")
    .flatMap((component) => (component.type === "text" ? component.props.text?.split(",") ?? [] : []))
    .map((tool) => tool.trim())
    .filter(Boolean);
});

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <Layout class="project-content">
    <ProjectHero :content="content" :projectId="projectId" />
    <figure v-if="content.heroImage" class="project-content-cover">
      <img :src="content.heroImage.src" :alt="content.heroImage.alt" loading="lazy" />
      <figcaption v-if="content.heroImage.caption">{{ content.heroImage.caption }}</figcaption>
    </figure>
    <section class="project-content-case grid">
      <article class="project-content-story">
        <template v-if="content.caseStudy">
          <section class="project-content-section">
            <h2>{{ t("project-overview") }}</h2>
            <p>{{ content.caseStudy.overview }}</p>
          </section>
          <section v-if="content.caseStudy.problem" class="project-content-section">
            <h2>{{ t("project-problem") }}</h2>
            <p>{{ content.caseStudy.problem }}</p>
          </section>
          <section class="project-content-section">
            <h2>{{ t("project-solution") }}</h2>
            <p>{{ content.caseStudy.solution }}</p>
          </section>
          <section v-if="content.caseStudy.process" class="project-content-section">
            <h2>{{ t("project-process") }}</h2>
            <p>{{ content.caseStudy.process }}</p>
          </section>
          <section v-if="content.caseStudy.results" class="project-content-section">
            <h2>{{ t("project-results") }}</h2>
            <p>{{ content.caseStudy.results }}</p>
          </section>
        </template>
        <div v-else class="project-content-components">
          <div
            v-for="(component, index) in projectComponents"
            :key="`${component.type}-${index}`"
            class="grid project-content-grid"
          >
            <ProjectComponent :type="component.type" :props="component.props" :index="index" />
          </div>
        </div>
        <div v-if="content.caseStudy && projectComponents.length" class="project-content-supporting-media">
          <div v-for="(component, index) in projectComponents" :key="`${component.type}-${index}`" class="grid">
            <ProjectComponent :type="component.type" :props="component.props" :index="index" />
          </div>
        </div>
      </article>
      <aside class="project-content-sidebar">
        <section class="project-content-sidebar-section">
          <h2>{{ t("project-technologies") }}</h2>
          <ul>
            <li v-for="technology in content.caseStudy?.technologies ?? content.tags" :key="technology">
              {{ technology }}
            </li>
          </ul>
        </section>
        <section v-if="projectTools.length" class="project-content-sidebar-section">
          <h2>{{ t("project-tools") }}</h2>
          <ul>
            <li v-for="tool in projectTools" :key="tool">{{ tool }}</li>
          </ul>
        </section>
      </aside>
    </section>
    <div class="grid project-content-next-project-grid">
      <Link
        v-if="nextProject"
        :to="`/project/${nextProject.slug}`"
        replace
        class="project-content-next-project"
        data-cursor="arrow"
        data-sound="click"
      >
        <NextProject :project="nextProject" />
      </Link>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.project-content {
  color: var(--color-text-400);
  width: 100%;

  &-cover {
    width: calc(100% - (var(--space-outer) * 2));
    max-width: 1280px;
    margin: 0 var(--space-outer) var(--space-xxxl);
    align-self: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      object-fit: contain;
      border-radius: var(--radius-md);
    }

    figcaption {
      margin-top: var(--space-sm);
      color: var(--color-text-300);
      font-size: var(--font-size-sm);
    }
  }

  &-case {
    width: calc(100% - (var(--space-outer) * 2));
    max-width: calc(var(--breakpoint-xxxl) - (var(--space-outer) * 2));
    align-self: center;
    padding: var(--space-xl) 0 var(--space-xxxl);
    border-top: 1px solid var(--color-grayscale-500);
    row-gap: var(--space-xxl);
  }

  &-story {
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 1 / 9;
    }
  }

  &-section {
    padding: 0 0 var(--space-xl);
    margin-bottom: var(--space-xl);
    border-bottom: 1px solid var(--color-grayscale-500);

    h2 {
      margin-bottom: var(--space-sm);
      font-size: var(--font-size-title-xs);
      line-height: var(--line-height-title);
    }

    p {
      max-width: 72ch;
      line-height: var(--line-height-copy);
      color: var(--color-text-300);
    }
  }

  &-sidebar {
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 10 / 13;
    }

    &-section {
      padding: 0 0 var(--space-lg);
      margin-bottom: var(--space-lg);
      border-bottom: 1px solid var(--color-grayscale-500);
    }

    h2 {
      margin-bottom: var(--space-sm);
      font-size: var(--font-size-title-xxs);
      line-height: var(--line-height-title);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      color: var(--color-text-300);
    }
  }

  &-components {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
  }

  &-supporting-media {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxl);
    padding-top: var(--space-lg);
  }

  &-grid {
    row-gap: var(--space-xxl);
  }

  &-next-project {
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 3 / 11;
    }

    @include mixins.mq("lg") {
      grid-column: 4 / 10;
    }

    @include mixins.mq("xl") {
      grid-column: 5 / 9;
    }

    &-grid {
      padding: 0 var(--space-outer);
      padding-top: var(--space-xl);
      padding-bottom: var(--space-xxxl);
    }
  }

  &-components {
    padding: 20px var(--space-outer);
    background-color: var(--color-background-400);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xxl);
    gap: var(--space-xxl);

    @include mixins.mq("md") {
      padding: 64px var(--space-outer);
    }
  }
}
</style>
