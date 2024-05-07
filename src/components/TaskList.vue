<template>
    <div class="divide-y-2">
        <ul 
            class="divide-y text-xl py-1 mx-4"
            style="min-height: 32rem"
            v-show="filteredTasks.length > 0"
        >
            <list-item
                v-for="(task, index) in filteredTasks"
                :task="task"
                :key="index"
                :id="task.id"
            ></list-item>
            </ul>
            <div
            class="flex justify-center items-center w-full rounded-xl"
            style="min-height: 32rem" 
            v-show="filteredTasks.length <= 0"
            >
            <h1 class="font-medium text-4xl">No task left to do</h1>
        </div>
        <list-footer
            :length="filteredTasks.length"
            :completed="completedTasks"
        ></list-footer>
    </div>
</template>

<script setup>
import { computed, inject, onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router';

import ListItem from './TaskListItem.vue'
import ListFooter from './TaskListFooter.vue'

const data = inject('$data')
const bus = inject('$bus')
const route = useRoute()
const tasks = ref(null)

tasks.value = data.getAllTasks()

onMounted(
    () => {
        bus.$on('task-created', () => {
            tasks.value = [...data.getAllTasks()]
        }),
        bus.$on('task-updated', () => {
            tasks.value = [...data.getAllTasks()]
        }),
        bus.$on('task-toggled', () => {
            tasks.value = [...data.getAllTasks()]
        })
        bus.$on('task-deleted', () => {
            tasks.value= [...data.getAllTasks()]
        })
        bus.$on('completed-deleted', () => {
            tasks.value = [...data.getAllTasks()]
        })
    }
)

watch(() => tasks, () => {
    tasks.value = data.getAllTasks()
})

const filteredTasks = computed(() => {
    if (route.params.index == 0) {
        return tasks.value;
    } else if (route.params.index == 1) {
        return tasks.value.filter(task => !task.isChecked);
    } else if (route.params.index == 2) {
        return tasks.value.filter(task => task.isChecked);
    }
})

const completedTasks = computed(() => {
    return tasks.value
        .map((task, index) => ({ isChecked: task.isChecked, index}))
        .filter(task => task.isChecked)
        .map(task => task.index)
})

</script>