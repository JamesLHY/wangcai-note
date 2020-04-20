<template>
    <div>
        <Layout class-prefix="layout">
            {{record}}
            <NumberPad :value.sync='record.amount' @submit="saveRecord"/>
            <Types :value.sync="record.type"/>
            <div class="notes">
                <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
            </div>
            <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Types from '@/components/Money/Types.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListModel';

    window.localStorage.setItem('version', '1.0.0');

    const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

    @Component({
        components: {FormItem, Types, Tags, NumberPad}
    })
    export default class Money extends Vue {
        tags = tagList;
        recordList: RecordItem[] = recordList;
        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0,};

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            const deepClone: RecordItem = recordListModel.clone(this.record);
            deepClone.createdTime = new Date();
            this.recordList.push(deepClone);

        }

        @Watch('recordList')
        onRecordListChange() {
            recordListModel.save(this.recordList);
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
        .notes{
            padding: 12px 0;
        }
    }
</style>



