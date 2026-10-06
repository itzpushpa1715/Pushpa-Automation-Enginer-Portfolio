import { ref, watch, onMounted, onUnmounted } from "vue";
import { resources } from "../utils/resources";
import gsap from "gsap";

export const preloaderVisible = ref(true);

export const usePreloader = () => {
  const progress = ref(0);
  const resourcesProgress = ref(0);
  const handleResourceProgress = (newProgress: number) => {
    resourcesProgress.value = newProgress;
  };

  onMounted(() => {
    resources.on("progress", handleResourceProgress);
    resourcesProgress.value = resources.isReady
      ? 1
      : resources.loaded / Math.max(1, resources.toLoad);
  });

  onUnmounted(() => {
    resources.off("progress", handleResourceProgress);
  });

  watch(
    resourcesProgress,
    (newProgress) => {
      progress.value = 0.25 + newProgress * 0.75;
    },
    { immediate: true },
  );

  watch(
    progress,
    (newProgress) => {
      const preloader = document.querySelector(".preloader") as HTMLElement;
      if (newProgress === 1) {
        gsap.delayedCall(0.2, () => {
          document.body.classList.remove("is-loading");
          preloader.classList.add("preloader-hidden");
          preloaderVisible.value = false;
        });
      }
    },
    { immediate: true },
  );
};
