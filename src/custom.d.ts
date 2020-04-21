type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdTime?: Date;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => string;
    save: () => void;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;

}

interface Window {
    tagList: Tag[];
    findTag: (id: string) => Tag |undefined;
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: TagListModel['update'];
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
}