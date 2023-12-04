import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospedeService } from '../../service/hospede.service';
import { MessageUtils } from '../../utils/message-utils';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-hospede',
  templateUrl: './form-hospede.component.html',
  styleUrl: './form-hospede.component.scss',
})
export class FormHospedeComponent implements OnInit {
  public form: FormGroup;
  public id: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _service: HospedeService,
    private _formBuilder: FormBuilder,
    private _messageUtils: MessageUtils
  ) {}

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.buildForm();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      dt_nascimento: [null],
      cpf: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null],
    });

    if (this.id !== 'novo') this.buscar();
  }

  buscar() {
    this._service.buscar(+this.id).then((data: any) => {
      this.form.patchValue(data);
    });
  }

  salvar(): void {
    const data = this.form.getRawValue();

    if (this.id === 'novo') {
      this._service.cadastrar(data).then((data: any) => {
        this.form.patchValue(data);
        this._location.back();
      });
    } else {
      this.form.get('id')?.setValue(this.id);
      this._service.atualizar(+this.id, data).then((data: any) => {
        this.form.patchValue(data);
      });
    }
  }

  excluir(): void {
    this._messageUtils
      .getConfirmDialogRef('Deseja excluir este hóspede?')
      .afterClosed()
      .subscribe(async (result) => {
        if (!result) return;
        this._service
          .excluir(+this.id)
          .then(() => {
            this._location.back();
          })
          .catch(() => {
            this._messageUtils.showSimpleMessage(
              'Este hóspede já possui reservas vinculadas.'
            );
          });
      });
  }
}
