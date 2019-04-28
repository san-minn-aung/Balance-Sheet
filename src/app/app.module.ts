import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './locale/translate.service';
import { TranslatePipe } from './locale/translate.pipe';
import { FormsModule } from '@Angular/forms';
export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
