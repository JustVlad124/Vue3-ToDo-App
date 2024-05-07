<template>
    <input-form />
    <div class="bg-white rounded-2xl shadow-xl">
        <router-view />
    </div>
</template>

<script setup>
import { inject, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import InputForm from './InputForm.vue';

const page = ref(null)
const route = useRoute()
const data = inject('$data')

onMounted(
    () => {
        page.value = data.getSinglePage(route.params.index)
    }
)

watch(() => route.params.index, (newIndex, oldIndex) => {
    page.value = data.getSinglePage(newIndex)
})

</script>
    