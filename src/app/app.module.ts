/* Importações Angular Material*/
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/';
import { MatFormFieldModule } from '@angular/ form field';
import { MatGridListModule } from '@angular/material/grid list';
import { MatIconModule } from '@angular/ icon';
import { MatInputModule } from '@angular/material/';
import { MatMenuModule } from '@angular/material/';
import { MatToolbarModule } from '@angular/material/';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        LoginComponent,
        MenuComponent,
        RodapeComponent,
        InicioComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
});
