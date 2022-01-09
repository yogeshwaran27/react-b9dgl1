import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-grids';
import { columnSpanData } from './data';
import { SampleBase } from './sample-base';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Inject,
} from '@syncfusion/ej2-react-grids';
export class RowSpanning extends SampleBase {
  constructor() {
    super(...arguments);
    this.queryCellInfoEvent = (args) => {
      let data = args.data;
      switch (data.EmployeeID) {
        default:
          if (args.column.field === 'EmployeeName') {
            args.rowSpan = 2;
          }
          break;
      }
    };
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            dataSource={columnSpanData}
            queryCellInfo={this.queryCellInfoEvent.bind(this)}
            allowTextWrap={true}
            allowFiltering={true}
            allowSorting={true}
            height="auto"
            width="auto"
            gridLines="Both"
          >
            <ColumnsDirective>
              <ColumnDirective
                field="EmployeeID"
                headerText="Employee ID"
                width="150"
                isPrimaryKey={true}
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="EmployeeName"
                headerText="Employee Name"
                width="200"
              ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Filter, Page, Sort]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

render(<RowSpanning />, document.getElementById('sample'));
