import {Component} from "@angular/core";
import {JigsawInput} from "jigsaw/pc-components/input/input";

@Component({
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
})
export class InputDisabledComponent {

    enabled: boolean;

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawInput',
    ];
}

