import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // const mode1 = import.meta.env.MODE
  console.log(mode)
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
        // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
        // 第三方组件库的解析器
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          AntDesignVueResolver({
            importStyle: true
          }),
          ElementPlusResolver({
            importStyle: mode === 'development' ? false : 'sass'
          })
        ]
      }),
      Components({
        // dirs 指定组件所在位置，默认为 src/components
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        // 配置需要将哪些后缀类型的文件进行自动按需引入
        extensions: ['vue', 'md'],
        resolvers: [
          AntDesignVueResolver({
            importStyle: 'less',
            resolveIcons: true
          }),
          ElementPlusResolver()
        ]
      }),
      {
        name: 'import-element-plus-style',
        transform(code, id) {
          if (/src\/main.ts$/.test(id)) {
            if (mode === 'development') {
              return {
                code: `${code};import 'element-plus/dist/index.css';`,
                map: null
              }
            } else {
              return {
                code: `${code};import 'element-plus/theme-chalk/src/message-box.scss';import 'element-plus/theme-chalk/src/message.scss';`,
                map: null
              }
            }
          }
        }
      }
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/utils.scss";'
        }
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 192, // 1rem的大小
            propList: ['*'],
            selectorBlackList: ['p-', 'w-', 'text-', 'px-', 'py-', 'h-'],
            exclude: /node_modules/
          })
        ]
      }
    }
  }
})
