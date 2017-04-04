import {NgModule} from '@angular/core'

import {CommonModule} from '@angular/common'
import {StarComponent} from './start.component'
import {FormsModule} from '@angular/forms'
import {LoadingBarComponent} from './loading.component'

@NgModule({
    declarations: [StarComponent, LoadingBarComponent],
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        LoadingBarComponent
     
    ]
})
export class SharedModule{}


