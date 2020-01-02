<template>
    <div>
        <el-container style="height: 100%;min-height:100vh;">
            <!--头部-->
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <!--左侧-->
                <el-aside>
                <Menu></Menu>
                </el-aside>
                <el-container>
                    <el-main>
                        主体
                        <router-view></router-view>
                    </el-main>
                    <el-footer>
                        <Footer></Footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Footer from '../components/panel/Footer'
    import Header from '../components/panel/Header'
    import Menu from '../components/panel/Menu'

    export default {
        name: "index",
        data(){
            return{

            }
        },
        components:{
            Footer,
            Header,
            Menu
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        padding: 0 0;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>