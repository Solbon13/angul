import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAssignComponent } from './ui/table-assign/table-assign.component';
import { TableRegComponent } from './ui/table-reg/table-reg.component';
import { TablePtkComponent } from './ui/table-ptk/table-ptk.component';
import { TableAgregatorComponent } from './ui/table-agregator/table-agregator.component';
import { TableAgregatorHistoryComponent } from './ui/table-agregator-history/table-agregator-history.component';
import { TableStatementVerdictComponent } from './ui/table-statement-verdict/table-statement-verdict.component';
import { BlockTableStatementVerdictComponent } from './block/block-table-statement-verdict/block-table-statement-verdict.component';
import { BlockTableAgregatorHistoryComponent } from './block/block-table-agregator-history/block-table-agregator-history.component';
import { BlockTableAgregatorComponent } from './block/block-table-agregator/block-table-agregator.component';
import { BlockTablePtkComponent } from './block/block-table-ptk/block-table-ptk.component';
import { BlockTableRegComponent } from './block/block-table-reg/block-table-reg.component';
import { BlockTableAssignComponent } from './block/block-table-assign/block-table-assign.component';



@NgModule({
  declarations: [
    TableAssignComponent,
    TableRegComponent,
    TablePtkComponent,
    TableAgregatorComponent,
    TableAgregatorHistoryComponent,
    TableStatementVerdictComponent,
    BlockTableStatementVerdictComponent,
    BlockTableAgregatorHistoryComponent,
    BlockTableAgregatorComponent,
    BlockTablePtkComponent,
    BlockTableRegComponent,
    BlockTableAssignComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlockTableStatementVerdictComponent,
    BlockTableAgregatorHistoryComponent,
    BlockTableAgregatorComponent,
    BlockTablePtkComponent,
    BlockTableRegComponent,
    BlockTableAssignComponent
  ]
})
export class ViewAndbModule { }
