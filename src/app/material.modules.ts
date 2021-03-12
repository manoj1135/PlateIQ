import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    imports:[
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatPseudoCheckboxModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatPseudoCheckboxModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule
    ]
})
export class MatModules {}