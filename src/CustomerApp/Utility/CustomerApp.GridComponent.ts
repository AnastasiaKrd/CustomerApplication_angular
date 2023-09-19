import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: "grid-ui",
    templateUrl: "./CustomerApp.Grid.html"
})

export class GridComponent{
    //for column names
    gridColumns: Array<any> = new Array<any>();
    // for grid data
    gridData: Array<Object> = new Array<Object>();

    @Input("grid-columns")
    set setGridColumns(_gridColumns:Array<Object>){
        this.gridColumns = _gridColumns;
    }
    @Input("grid-data")
    set setGridData(_gridData:Array<Object>){
        this.gridData = _gridData;
    }

    @Output("grid-selected")
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();
    
    SelectGrid(_selected:Object){
        //emit out event - send the selected object to the ui under which this component is running
        this.eventEmitter.emit(_selected);
    }
}