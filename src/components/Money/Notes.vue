<template>
    <div>

        <label class="notes">
            {{value}}
            <span class="name">备注</span>
            <input type="text" v-model="value" placeholder="输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    @Component
    export default class Notes extends Vue {
       value='';
    }
</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        padding-left: 16px;

        .name {
            padding-right: 16px;
        }

        input {
            padding: 24px 16px 24px 0;
            flex-grow: 1;
            background: transparent;
            border: none;

        }
    }
</style>