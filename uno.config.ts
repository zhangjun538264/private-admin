// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    rules: [
        // width height
        [/^w-(\d+)$/, match => ({ width: `${match[1]}px`})],
        [/^h-(\d+)$/, match => ({ height: `${match[1]}px`})],
        [/^wh-(\d+)$/, match => ({ width: `${match[1]}px`,height: `${match[1]}px`})],
        // margin
        [/^m-(\d+)$/, match => ({ margin: `${match[1]}px`})],
        [/^mt-(\d+)$/, match => ({ 'margin-top': `${match[1]}px`})],
        [/^mb-(\d+)$/, match => ({ 'margin-bottom': `${match[1]}px`})],
        [/^ml-(\d+)$/, match => ({ 'margin-left': `${match[1]}px`})],
        [/^mr-(\d+)$/, match => ({ 'margin-right': `${match[1]}px`})],
        // padding
        [/^p-(\d+)$/, match => ({ padding: `${match[1]}px`})],
        [/^pt-(\d+)$/, match => ({ 'padding-top': `${match[1]}px`})],
        [/^pb-(\d+)$/, match => ({ 'padding-bottom': `${match[1]}px`})],
        [/^pl-(\d+)$/, match => ({ 'padding-left': `${match[1]}px`})],
        [/^pr-(\d+)$/, match => ({ 'padding-right': `${match[1]}px`})],

        [/^fs-(\d+)$/, match => ({ 'font-size': `${match[1]}px`})],
    ],
    shortcuts: {
        "flex-center": "flex justify-center items-center",
        "justify-end": "flex-justify-end",
        "justify-between": "flex-justify-between",
        "justify-around": "flex-justify-around",
        "items-start": "flex-items-start",
        "items-end": "flex-items-end",
        "wh-full": "w-full h-full",
        // "flex-x-between": "flex items-center justify-between",
        // "flex-x-end": "flex items-center justify-end",
        // "absolute-lt": "absolute left-0 top-0",
        // "absolute-rt": "absolute right-0 top-0 ",
        // "fixed-lt": "fixed left-0 top-0",
    },
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
