import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AuthComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
