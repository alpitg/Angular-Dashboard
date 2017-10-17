import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent, HeaderComponent } from "app/shared";
import { AddClassesRoutingModule } from "app/layout/class/add-classes/add-classes-routing.module";
import { AddClassesComponent } from "app/layout/class/add-classes/add-classes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AddClassesRoutingModule,
        FormsModule,//Important to display form
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,//Button Material
        MatInputModule,
        MatSelectModule, //Dropdown
        MatCheckboxModule,
        MatDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [
        AddClassesComponent
    ],
    providers: [],
})
export class AddClassesModule { }
