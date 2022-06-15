import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";

export interface DataItem {
    key:number;
    number: string;
    title: string;
    user: string;
    status: string;
    time: string;
    priority: string;
}

export interface ColumnItem {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn<DataItem> | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<DataItem> | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
}

