import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

/* Importações Angular Material*/
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        InicioComponent,
        RodapeComponent
    ],
    imports: [
        AppRoutingModule,
        MatButtonModule, 
        BrowserAnimationsModule,
        BrowserModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MenuComponent,
        LoginComponent,
        InicioComponent,
        RodapeComponent        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }


