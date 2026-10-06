import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { SRGBColorSpace, TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import EventEmitter from "./EventEmitter";
import { sources } from "../sources";

import type { Texture } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

const isProd = import.meta.env.PROD;

type ResourceType = Texture | GLTF;

class Resources extends EventEmitter<{
  ready: void;
  progress: number;
}> {
  toLoad: number = sources.length;
  isReady = false;
  loaded = 0;
  items: Record<string, any> = {};

  loaders: {
    gltfLoader: GLTFLoader;
    textureLoader: TextureLoader;
    fontLoader: FontLoader;
  };

  constructor() {
    super();

    this.loaders = {
      gltfLoader: new GLTFLoader(),
      textureLoader: new TextureLoader(),
      fontLoader: new FontLoader(),
    };
  }

  startLoading() {
    if (this.isReady) return;

    // If there are no resources to load, mark ready immediately
    if (this.toLoad === 0) {
      this.loaded = 0;
      this.isReady = true;
      this.emit("progress", 1);
      this.emit("ready");
      this.log("No resources to load — ready");
      return;
    }

    for (const source of sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(
          source.path,
          (file) => {
            this.sourceLoaded(source, file);
          },
          undefined,
          (error) => {
            this.log(`Failed to load gltf ${source.name}: ${String(error)}`);
            // Treat failure as loaded to avoid blocking the preloader
            this.sourceLoaded(source, null as any);
          },
        );
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(
          source.path,
          (file: Texture) => {
            file.colorSpace = SRGBColorSpace;
            this.sourceLoaded(source, file);
          },
          undefined,
          (error) => {
            this.log(`Failed to load texture ${source.name}: ${String(error)}`);
            this.sourceLoaded(source, null as any);
          },
        );
      }
    }
  }

  sourceLoaded(source: { name: string; type: string; path: string }, file: ResourceType | null) {
    this.items[source.name] = file;

    this.loaded++;

    // emit progress (clamped)
    const progress = Math.min(1, this.loaded / Math.max(1, this.toLoad));
    this.emit("progress", progress);

    if (this.loaded === this.toLoad) {
      this.isReady = true;
      this.emit("ready");
      this.log("All resources loaded (or failed to load but treated as complete)");
    }
  }

  log(message: string) {
    if (isProd) return;
    console.log(`[Resources] ${message}`);
  }
}

export const resources = new Resources();
resources.startLoading();
