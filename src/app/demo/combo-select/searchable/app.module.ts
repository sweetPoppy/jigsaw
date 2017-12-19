import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {JigsawTileSelectModule} from "jigsaw/component/list-and-tile/tile";
import {JigsawComboSelectModule} from "jigsaw/component/combo-select/index";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {ComboSelectAutoCompleteDemo} from "./app.component";
import {JigsawInputModule} from "../../../../jigsaw/component/input/input";

@NgModule({
    declarations: [ComboSelectAutoCompleteDemo],
    exports: [ComboSelectAutoCompleteDemo],
    imports: [
        JigsawComboSelectModule, JigsawTileSelectModule, CommonModule, JigsawDemoDescriptionModule, JigsawInputModule
    ],
})
export class ComboSelectAutoCompleteDemoModule {

}
