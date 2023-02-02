import { addComponent, defineNuxtModule, addImportsSources } from "@nuxt/kit";
import * as AllIcons from "@icon-park/vue-next";
import { PresetImport } from "unimport";

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
    const icons = Object.keys(AllIcons).filter(
      (value) => value != "DEFAULT_ICON_CONFIGS" && value != "IconProvider"
    );
    icons.forEach((icon) => {
      addComponent({
        name: `${options.prefix}${icon}`,
        filePath: `@icon-park/vue-next/es/icons/${icon}`,
      });
    });
    addImportsSources({
      from: `@icon-park/vue-next`,
      imports: [
        ...icons.map(
          (icon) => [icon, `${options.prefix}${icon}`] as PresetImport
        ),
      ],
    });
  },
});
