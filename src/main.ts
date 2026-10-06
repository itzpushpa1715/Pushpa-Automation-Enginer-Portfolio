import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import particlesVideo from "./assets/videos/particles.mp4";

gsap.registerPlugin(ScrollTrigger);

const preloaderVideo = document.querySelector<HTMLVideoElement>(".preloader-video");
if (preloaderVideo) {
	preloaderVideo.src = particlesVideo;
	preloaderVideo.defaultPlaybackRate = 3;
	preloaderVideo.playbackRate = 3;
	preloaderVideo.addEventListener(
		"loadedmetadata",
		() => {
			preloaderVideo.playbackRate = 3;
		},
		{ once: true },
	);
	void preloaderVideo.play().catch(() => undefined);
}

createApp(App).mount("#app");
