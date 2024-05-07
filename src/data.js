const tasksKey = 'tasks'
const pagesKey = 'pages'


let tasksJson = localStorage.getItem(tasksKey)
let tasksStore = JSON.parse(tasksJson) 

let counter = 0

if (tasksStore.length == 0) {
    counter = 0
} else {
    if (localStorage.getItem('counter')) {
        counter = localStorage.getItem('counter')
    } else {
        counter = tasksStore.slice(-1)[0].id + 1
    }
}

localStorage.setItem('counter', counter)

let pagesJson = localStorage.getItem(pagesKey)
let pagesStore = JSON.parse(pagesJson)

export default {
    getAllTasks() {
        return tasksStore
    },
    getSingleTask(id) {
        return tasksStore.filter((task) => task.id == id)
    },
    getAllPages() {
        return pagesStore
    },
    getSinglePage(index) {
        return pagesStore[index]
    },
    save(key) {
        localStorage.setItem(key, JSON.stringify(key === 'tasks' ? tasksStore : pagesStore))
    },
    toggleTask(id) {
        tasksStore.forEach((task) => {
            if (task.id == id) {
                task.isChecked = !task.isChecked
            }
        })

        this.save(tasksKey)
    },
    createTask(task) {
        task.value.id = counter++
        localStorage.setItem('counter', counter)

        tasksStore.push(task.value)

        this.save(tasksKey)
    },
    editTask(id, newTask) {
        tasksStore.forEach((task, index) => {
            if (id == task.id) {
                tasksStore[index] = newTask
            }
        })

        this.save(tasksKey)
    },
    deleteTask(id) {
        let res = tasksStore.filter((task) => task.id != id)

        tasksStore = res

        this.save(tasksKey)
    },
    deleteCompleted() {
        let res = tasksStore.filter((task) => task.isChecked == false)

        tasksStore = res

        this.save(tasksKey)
    }
}