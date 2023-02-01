import { addComponent, defineNuxtModule } from "@nuxt/kit";
import * as AllIcons from "@icon-park/vue-next/es/map";

// Module options TypeScript inteface definition
export interface ModuleOptions {
  prefix: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-icon-park",
    configKey: "iconPark",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: "Ip",
  },
  setup(options) {
    Object.keys(AllIcons).forEach((icon) => {
      addComponent({
        name: `${options.prefix}${icon}`,
        filePath: `@icon-park/vue-next/es/icons/${icon}`,
      });
    });
  },
});
