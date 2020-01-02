<template>
    <div class="home">
        <el-container>
            <el-header>
                <HelloWorld></HelloWorld>
            </el-header>
            <el-main>
                <el-table
                        :data="widget_infos"
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="title"
                            label="标题"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="show_divider"
                            label="显示分割线">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <img :src="resDate.icon">
        <el-button type="primary" @click="primaryClick">主要按钮</el-button>
    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld";
    import API from '@/sdk/request-url';
    import { Message } from 'element-ui'

    export default {
        data() {
            return {
                message: 'Hello Vue!',
                resDate: [],
                widget_infos: []
            }
        }, methods: {
            primaryClick: function () {
                /*  this.axios.get('/apis/ithil_j/activity/movie_annual2017').then(res => {
                      console.log(res.data);
                      this.resDate = res.data.res.payload;
                      this.widget_infos = res.data.res.widget_infos;
                      console.log(this.resDate)
                  });*/
                API.info().then(res => {
                    console.log(res.data);
                    this.resDate = res.data.res.payload;
                    this.widget_infos = res.data.res.widget_infos;
                    console.log(this.resDate)
                })
                /*API.info2().then(res => {
                    Message({
                        message: res.data.content,
                        type: 'success',
                        duration: 5 * 1000
                    })
                    console.log(res.data);
                })*/
            }, handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }, components: {
            HelloWorld
        }
    }
</script>
