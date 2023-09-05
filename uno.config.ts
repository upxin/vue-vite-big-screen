// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
      second: '#f9f9f9',
      'header-ac': '#f0f9fc'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
