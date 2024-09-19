# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


<script setup>
import { ShoppingCart, Search } from 'lucide-vue-next';

const headerButtons = [
    {name: 'Categories', link: ''},
    {name: 'Deals', link: '/deals'},
    {name: 'What\'s New', link: '/whatsnew'},
    {name: 'Delivery', link: '/delivery'}
]
</script>
<template>
    <div>
        <div class="border border-black flex justify-between">
            <div @click="goHome"
            class="border border-black hover:bg-gray-200 transition-hover duration-100 rounded-md flex items-center cursor-pointer">
            <img class="w-12 h-10 p-1" src="/images/sokologo.jpg" alt="SokoMax Logo">
            <p class="font-bold text-2xl text-green-900">SokoMax</p>
            </div>
            <div class="border border-black flex flex-row gap-2 items-center">
                    <NuxtLink
                     class="hover:bg-gray-100 font-semibold transition-hover duration-100 text-sm p-2 rounded-md"
                      v-for="(b, index) in headerButtons" :key="index" :to="b.link">
                        {{ b.name }}
                    </NuxtLink>
            </div>
            <div class="border border-black relative flex flex-row gap-6 items-center">
            <input type="text" placeholder="Search Product"
            class="border hover:border-indigo-500 transition-hover duration-100 px-4 py-2 w-72 border-gray-300 rounded-full">
            <div class="flex flex-row gap-2">
                <ShoppingCart/>
                <p class="font-medium">Cart</p>
            </div>
            <button class="absolute right-24 text-gray-500">
                <Search size="16"/>
            </button>
            </div>
        </div>
        <div>
            <slot/>
        </div>
    </div>
</template>
<style scoped>

</style>
