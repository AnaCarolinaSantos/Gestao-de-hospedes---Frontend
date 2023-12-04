import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Timestamp, map, startWith } from 'rxjs';
import { MessageUtils } from '../../utils/message-utils';
import { ReservaService } from '../../service/reserva.service';
import { HospedeService } from '../../service/hospede.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrl: './form-reserva.component.scss',
})
export class FormReservaComponent {
  public form: FormGroup;
  public id: any;
  public control = new FormControl('');
  public options: any[] = [];
  public filteredOptions: Observable<string[]> | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _service: ReservaService,
    private _hospedeService: HospedeService,
    private _formBuilder: FormBuilder,
    private _messageUtils: MessageUtils,
    private _matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this.listarHospedes();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      id: [null],
      id_hospede: [null, Validators.required],
      dt_inicial: [null, Validators.required],
      dt_final: [null, Validators.required],
      check_in: [null],
      checkout: [null],
      estacionamento: [false],
      qt_diarias: [null],
      vl_diarias: [null],
      vl_taxa_estacionamento: [null],
      vl_taxa_checkout_atrasado: [null],
      vl_total: [null],
    });

    this.form.get('vl_total')?.disable();

    if (this.id !== 'novo') this.buscar();
  }

  listarHospedes() {
    this._hospedeService.listar().then((result: any) => {
      for (const item of result) {
        this.options.push({ id: item.id, nome: item.nome });
      }

      this.buildForm();
    });

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredOptions = this.options.filter((option) =>
      option.nome.toLowerCase().includes(filterValue)
    );

    return filteredOptions.map((option) => option.nome);
  }

  onSelectionChange(event: MatAutocompleteSelectedEvent) {
    const selectedOption = this.options.find(
      (option) => option.nome === event.option.value
    );
    if (selectedOption) {
      this.form.get('id_hospede')?.setValue(selectedOption.id);
    }
  }

  buscar() {
    this._service.buscar(+this.id).then((data: any) => {
      this.form.patchValue(data);
      this.control.setValue(data.hospede);
    });
  }

  salvar(): void {
    const data = this.form.getRawValue();

    if (this.id === 'novo') {
      this._service.cadastrar(data).then((data: any) => {
        this._location.back();
      });
    } else {
      this.form.get('id')?.setValue(this.id);
      this._service
        .atualizar(+this.id, data)
        .then((data: any) => {
          this.buscar();
        })
        .catch(() => {
          this._messageUtils.showSimpleMessage(
            'O horário para check-in é a partir das 14h00min'
          );
          this._location.back();
        });
    }
  }

  checkIn() {
    let dataHoraAtual = new Date();
    this.form.get('check_in')?.setValue(dataHoraAtual);
    this.salvar();
  }

  checkout() {
    let dataHoraAtual = new Date();
    this.form.get('checkout')?.setValue(dataHoraAtual);
    this.salvar();
  }

  formatarDataHora(field: string): string {
    const dateTime = this.form.get(field)?.value;
    
    if (dateTime) {
      const date = dateTime.slice(0, 10);
      const time = dateTime.slice(11, 19);
      
      const result = new Date(`${date}T${time}`);
      result.setHours(result.getHours() - 3);
      return result.toLocaleString();
    }
    
    return '';
  }

  excluir(): void {
    this._messageUtils
      .getConfirmDialogRef('Deseja excluir esta reserva?')
      .afterClosed()
      .subscribe(async (result) => {
        if (!result) return;
        this._service.excluir(+this.id).then(() => {
          this._location.back();
        });
      });
  }

  mostrarTotalizadores() {
    this._messageUtils.getTotalsDialogRef(this.form.getRawValue());
  }
}
