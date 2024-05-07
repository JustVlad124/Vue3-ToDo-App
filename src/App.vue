<template>
    <div id="root" class="bg-zinc-100 h-dvh">
        <main-header />
        <nav-bar />
        <main class="container mx-auto max-w-5xl">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import MainHeader from './components/MainLayoutHeader.vue'
import NavBar from './components/MainLayoutNavBar.vue'

</script>