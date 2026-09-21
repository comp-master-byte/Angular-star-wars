import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-template',
  imports: [RouterLink],
  templateUrl: './auth-template.html',
  styleUrl: './auth-template.css',
})
export class AuthTemplate {
  public title = input('');
  public subtitle = input('');
  public onHuckAuth = output();

  handleHuckAuthClick() {
    this.onHuckAuth.emit();
  }
}
