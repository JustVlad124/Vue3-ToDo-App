<template>
    <div>
        <form 
            action=""
            class="flex justify-between items-center w-full p-4"
        >
            <div class="flex justify-center items-center w-10/12">
                <input
                    ref="input"
                    class="px-3 py-2 rounded-md text-xl w-full focus"
                    type="text"
                    v-model="task.task"
                >
            </div>
            <div class="flex justify-center items-center w-1/12">
                <button
                    class="flex justify-center items-center hover:bg-yellow-400 hover:rounded-full active:bg-yellow-500 mr-2"
                    style="width: 40px; height: 40px;"
                    @click.prevent="submit(id)"
                >
                    <img src="/src/assets/icons/save-icon.svg" alt="save icon" width="23px">
                </button>
                <button
                    class="hover:bg-yellow-400 hover:rounded-full active:bg-yellow-500"
                    @click.prevent="goToTasksList"
                >
                    <img src="/src/assets/icons/cross-delete.svg" alt="check mark icon" width="40px">
                </button>
            </div>
                
        </form>
    </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const data = inject('$data')
const bus = inject('$bus')
const { id } = defineProps(['id'])

const input = ref(null)
const task = ref(null)
task.value = data.getSingleTask(id)[0]

onMounted(() => {
    input.value.focus()
})

const submit = (id) => {
    data.editTask(id, task.value)

    bus.$emit('task-updated')

    goToTasksList()
}

const goToTasksList = () => {
    let index = route.params.index
    router.push(`/${index}/tasks`)
}

</script>