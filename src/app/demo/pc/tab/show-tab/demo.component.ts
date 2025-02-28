/**
 * Created by 10177553 on 2017/3/29.
 */
import {Component, ViewChild} from '@angular/core';
import {JigsawTab} from "jigsaw/pc-components/tabs/tab";

@Component({
    templateUrl: "./demo.component.html"
})
export class JigsawShowTabComponent {

    @ViewChild('myTab', {static: false}) myTab: JigsawTab;

    showTab() {
        this.myTab.showTab(1);
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawTab.showTab',
    ];
}
