import { createRouter, createWebHashHistory } from "vue-router";

import MainLayout from "./components/MainLayout.vue";
import InputForm from "./components/InputForm.vue";
import TaskList from "./components/TaskList.vue";
import TaskEditForm from "./components/TaskEditForm.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?/tasks',
            component: MainLayout,
            children: [
                { path: '', component: TaskList },
                { path: ':id/edit', component: TaskEditForm, props: true }
            ]
        },
    ]
});

export default router