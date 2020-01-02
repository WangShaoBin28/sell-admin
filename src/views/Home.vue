<template>
    <div>
        <el-container>
            首页{{message}}
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!',
                resDate: [],
                widget_infos: []
            }
        }
    }
</script>
