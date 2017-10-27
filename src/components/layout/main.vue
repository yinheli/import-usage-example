<template>
    <div>
        <h1>demo app</h1>

        <ul class="nav">
            <li>
                <router-link :to="{path: '/'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{path: '/about'}">About</router-link>
            </li>
        </ul>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
