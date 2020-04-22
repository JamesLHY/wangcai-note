<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
                :class="{selected: selectedTags.indexOf(tag)>=0 }"
                @click="toggle(tag)">
                {{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';


    @Component({
        computed: {
            tagList() {
                return this.$store.state.tagList;
            }
        }
    })
    export default class Tags extends Vue {
        selectedTags: string[] = [];

        created(){
            this.$store.commit('fetchTags')
        }

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value', this.selectedTags);
        }

        create() {
            const name = window.prompt('请输入标签');
            if (!name) {
                return window.alert('标签不能为空');
            }
            this.$store.commit('createTag', name)
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        flex-grow: 1;
        padding: 16px;
        font-size: 14px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                height: 24px;
                line-height: 24px;
                border-radius: (24px/2);
                padding: 0 16px;
                margin-right: 10px;
                margin-top: 10px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: snow;
                border-bottom: 1px solid;
                color: #999999;
                padding: 0 4px;
            }
        }
    }
</style>