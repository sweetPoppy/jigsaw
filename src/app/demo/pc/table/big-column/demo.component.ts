import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BigTableData} from "jigsaw/common/core/data/table-data";
import {AdditionalColumnDefine, TableValueGenerators} from "jigsaw/pc-components/table/table-typings";

@Component({
    templateUrl: './demo.component.html'
})
export class BigColumnDemoComponent {
    tableData: BigTableData;

    constructor(public http: HttpClient) {
        this.tableData = new BigTableData(http, 'mock-data/big-table-data');
        this.tableData.pagingInfo.pageSize = 1000;
        this.tableData.viewport.rows = 15;
        this.tableData.viewport.columns = 10;
        this.tableData.fromAjax();
        this.tableData.dataReviser = data => {
            data.data = data.data.slice(0, 15);
            return data;
        }
    }

    additionalColumnDefines: AdditionalColumnDefine[] = [
        {
            pos: 0,
            width: '50px',
            header: {
                text: '#',
            },
            cell: {
                data: TableValueGenerators.rowIndexGenerator,
            }
        }
    ];

    selectedStep = 10;

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '这个demo展示了表格呈现海量数据时的一个解决方案，它能够以常数时间处理任何量级的数据。';
    description: string = require('!!raw-loader!../big-table/readme.md');
    tags: string[] = [
        'JigsawTable',
        'BigTableData'
    ];
}

