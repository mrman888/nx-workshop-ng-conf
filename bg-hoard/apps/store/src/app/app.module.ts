import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, FormatRating } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent, FormatRating],
  imports: [
    BrowserModule,
    StoreUiSharedModule,
    MatCardModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(
              (module) => module.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
