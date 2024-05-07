<template>
    <div >
        <form 
            ref="createForm"
            action=""
            class="flex items-center my-10 bg-white rounded-2xl h-20 shadow-xl"
        >
            <input 
                id="create-input"
                type="text"
                placeholder="Start typing..."
                class="w-5/6 h-full rounded-2xl placeholder-gray-400::placeholder pl-6 text-2xl"
                v-model.trim="task.task"
            >
            <button 
                type="submit"
                class="bg-yellow-300 w-1/6 h-3/5 mx-6 rounded-lg text-2xl hover:bg-yellow-400"
                :class="{ 'disabled:bg-yellow-300 disabled:cursor-not-allowed' : isFormInvalid }"
                :disabled="isFormInvalid"
                @click.prevent="submit"
            >Create</button>
        </form>
    </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'

const data = inject('$data')
const bus = inject('$bus')

const task = ref({
    id: null,
    task: null,
    isChecked: false
})

const isFormInvalid = computed(() => {
    return task.value.task === null
})

const submit = () => {
    data.createTask(task)

    bus.$emit('task-created')  

    task.value = {
        id: null,
        task: null,
        isChecked: false
    }
    
    document.getElementById('create-input').value = ''
}

</script>