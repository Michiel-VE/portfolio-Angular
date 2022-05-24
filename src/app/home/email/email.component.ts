import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import Email, { EmailJSResponseStatus } from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  readonly MAIL_REGEX = '^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$';
  readonly nameControl = 'name';
  readonly emailControl = 'email';
  readonly msgControl = 'message';

  mailForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private toaster: Toaster, public translate: TranslateService) {
  }

  ngOnInit(): void {
    Email.init('NY1jlvxnwd2K5Bk2H');
    this.initForm();
  }


  public sendEmail(formDirective: FormGroupDirective): void {
    const templateMail = {
      sender_name: this.mailForm.get(this.nameControl).value,
      sender_mail: this.mailForm.get(this.emailControl).value,
      msg: this.mailForm.get(this.msgControl).value,
    };
    if (this.mailForm.valid) {
      Email.send('service_portfolio', 'template_portfolio', templateMail)
        .then((result: EmailJSResponseStatus) => {
          this.toaster.open({
            caption: this.translate.instant('home.footer.sendEmail'),
            type: 'success',
            autoClose: true,
            preventDuplicates: true,
            duration: 3500,
            position: 'top-right',
          });
          formDirective.resetForm();
        }, (error: Error) => {

          this.toaster.open({
            caption: this.translate.instant('home.footer.sendErrorEmail'),
            type: 'danger',
            autoClose: true,
            preventDuplicates: true,
            duration: 3500,
            position: 'top-right',
          });
          formDirective.resetForm();
        });
    }
  }

  private initForm(): void {
    this.mailForm = this.formBuilder.group({
        [this.nameControl]: ['', [Validators.required]],
        [this.emailControl]: ['', [Validators.email,
          Validators.required,
          Validators.pattern(this.MAIL_REGEX),
        ],
        ],
        [this.msgControl]: ['', [Validators.required, Validators.maxLength(1024)]],
      },
    );
  };

  getNameErrorMessage(): string {
    if (this.mailForm.get(this.nameControl).hasError('required')) {
      return this.translate.instant('home.footer.nameErrorReq');
    }
    return '';
  };

  getEmailErrorMessage(): string {
    if (this.mailForm.get(this.emailControl).hasError('required')) {
      return this.translate.instant('home.footer.emailErrorReq');
    }

    if (this.mailForm.get(this.emailControl).hasError('pattern')) {
      return this.translate.instant('home.footer.emailErrorPattern');
    }
    return this.mailForm.get(this.emailControl).hasError('email') ? this.translate.instant('home.footer.emailErrorEmail') : '';
  };

  getMessageErrorMessage(): string {
    if (this.mailForm.get(this.msgControl).hasError('required')) {
      return this.translate.instant('home.footer.msgErrorReq');
    }
    return '';
  };
}
