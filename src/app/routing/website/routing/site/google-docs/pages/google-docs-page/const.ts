import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from "ng-zorro-antd/table";
import { GoogleData } from "src/app/store/google-store/const";

// export interface DataItem {
//     key:number;
//     number: string;
//     title: string;
//     user: string;
//     status: string;
//     time: string;
//     priority: string;
// }

export interface ColumnItemGoogle {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn<GoogleData> | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn<GoogleData> | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
}

