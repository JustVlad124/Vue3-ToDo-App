<template>
    <li class="py-2">
        <div class="flex justify-between hover:bg-yellow-100 rounded-xl p-2">
            <div class="flex w-full">
                <label class="flex justify-center items-center cursor-pointer mr-2">
                    <input type="checkbox" class="hidden" :checked="task.isChecked" @click.prevent="toggle(id)">
                    <span class="hover:bg-yellow-400 hover:rounded-full">
                        <img v-if="task.isChecked" src="/src/assets/icons/checkmark-list.svg" alt="check mark icon" width="40px">
                        <img v-else src="/src/assets/icons/minus-list.svg" alt="minus icon" width="40px">
                    </span>
                </label>
                <div class="flex justify-center items-center">
                    <label class="text-ellipsis w-full">
                        {{ task.task }}
                    </label>
                </div>
            </div>
            <div class="flex justify-center items-center ml-2">
                <button
                    class="flex justify-center items-center hover:bg-yellow-400 hover:rounded-full active:bg-yellow-500"
                    style="width: 33px; height: 33px;"
                    @click.prevent="goToEditPage(id)"
                >
                    <img src="/src/assets/icons/edit-2-icon.svg" alt="delete cross" width="23px">
                </button>
            </div>
            <div class="flex justify-center items-center ml-2">
                <button
                    class="hover:bg-yellow-400 hover:rounded-full active:bg-yellow-500"
                    @click.prevent="deleteTask(id)"
                >
                    <img src="/src/assets/icons/cross-delete.svg" alt="delete cross" width="36px">
                </button>
            </div>
        </div>
    </li>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const data = inject('$data')
const bus = inject('$bus')
const { task, id } = defineProps(['task', 'id'])

function goToEditPage(id) {
    router.push({ path: `tasks/${id}/edit` })
}

const toggle = (id) => {
    data.toggleTask(id)

    bus.$emit('task-toggled')
}

const deleteTask = (id) => {
    console.log(task)
    data.deleteTask(id)

    bus.$emit('task-deleted')
}

</script>