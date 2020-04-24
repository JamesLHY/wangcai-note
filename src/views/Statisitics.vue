<template>
    <Layout>
        Statistics
       <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync='interval'/>
    </Layout>
</template>
<style scoped lang="scss">
    ::v-deep .type-tabs-item {
        background: #C4C4C4;
        &.selected {
            color: white;
            &::after {
                display: none;
            }
        }
    }
</style>

<script lang="ts">

    import Types from '@/components/Money/Types.vue';
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs, Types},
    })

    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = [
            {text:'日',value:'day'},
            {text:'周',value:'week'},
            {text:'月',value:'month'},
        ];
        typeList = [
            {text:'支出',value:'-'},
            {text:'收入',value:'+'},
        ]
    }
</script>

