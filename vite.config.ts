import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            fileName: (format) => 'index.mjs',
        },
        rollupOptions: {
            external: ['vitest'], // укажи здесь все peer-зависимости
        },
    },
    plugins: [
        dts({
            include: ['src'], // декларации только для src
            exclude: ['examples', 'tests'], // явно исключаем ненужные папки
        }),
    ],
})
