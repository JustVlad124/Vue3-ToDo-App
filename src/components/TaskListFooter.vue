<template>
    <footer class="flex justify-between p-4 pb-5 text-lg text-gray-500">
        <div>
            <p>{{ props.length }} items left</p>
        </div>
        <div class="hover:text-gray-900 cursor-pointer">
            <button 
                type="button"
                class="active:text-red-500"
                @click.prevent="deleteCompleted"
            >
                Clear completed
            </button>
        </div>
    </footer>
</template>

<script setup>
import { inject } from 'vue';


const data = inject('$data')
const bus = inject('$bus')
const props = defineProps(['length', 'completed'])

const deleteCompleted = () => {
    data.deleteCompleted()

    bus.$emit('completed-deleted')
}

</script>