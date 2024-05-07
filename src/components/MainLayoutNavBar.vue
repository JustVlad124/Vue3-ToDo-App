<template>
    <nav>
        <ul class="flex justify-evenly w-full h-16 bg-yellow-300">
            <li
                v-for="(link, index) in links"
                :key="index"
                class="text-3xl font-medium w-2/6 hover:bg-yellow-400 hover:text-white"
            >
                <router-link
                    :to="`/${index}/tasks`"
                    class="flex justify-center items-center h-full w-full"
                    active-class="bg-orange-300"
                >
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { inject } from 'vue'

const data = inject('$data')
const links = data.getAllPages()

</script>