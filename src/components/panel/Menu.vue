<template>
    <div>
        <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">首页</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link :to="{name: 'home', params:{type:'1'}}">home页面</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link :to="{name: 'from', params:{type:'1'}}">from页面</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">首页2</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link :to="{name: 'home', params:{type:'1'}}">home页面</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link :to="{name: 'from', params:{type:'1'}}">from页面</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>