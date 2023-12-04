import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { HospedeService } from '../../service/hospede.service';

@Component({
  selector: 'app-list-hospedes',
  templateUrl: './list-hospedes.component.html',
  styleUrl: './list-hospedes.component.scss',
})
export class ListHospedesComponent implements AfterViewInit {
  public control = new FormControl('');
  public filteredOptions: Observable<string[]> | undefined;
  public options: string[] = [
    'Por nome, documento ou telefone',
    'Que ainda estão no hotel',
    'Com reserva, mas sem check-in',
  ];

  public rows: any[];
  public displayedColumns: string[] = [
    'id',
    'nome',
    'data_nascimento',
    'cpf',
    'telefone',
    'email',
    'acao',
  ];
  public dataSource = new MatTableDataSource<any>();
  public enableFilters: boolean = true;

  constructor(private _service: HospedeService) {}

  ngOnInit() {
    this.listar();
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  onSelectionChange(event: any) {
    if (event.option.value === 'Que ainda estão no hotel') {
      this.listarHospedesNoHotel();
      this.enableFilters = false;
    } else if (event.option.value === 'Com reserva, mas sem check-in') {
      this.listarHospedesComReservaSemCheckIn();
      this.enableFilters = false;
    } else {
      this.listar();
      this.enableFilters = true;
    }
  }

  listar() {
    this._service.listar().then((lista: any[]) => {
      this.rows = lista;
      this.dataSource = new MatTableDataSource<any>(this.rows);
    });
  }

  listarHospedesNoHotel() {
    this._service.listarHospedesNoHotel().then((lista: any[]) => {
      this.rows = lista;
      this.dataSource = new MatTableDataSource<any>(this.rows);
    });
  }

  listarHospedesComReservaSemCheckIn() {
    this._service.listarHospedesComReservaSemCheckIn().then((lista: any[]) => {
      this.rows = lista;
      this.dataSource = new MatTableDataSource<any>(this.rows);
    });
  }

  filtrarLista(value: string, field: string) {
    let rows = this.rows;

    if (field === 'nome') {
      rows = rows.filter(
        (vl) => vl.nome.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }
    if (field === 'cpf') {
      rows = rows.filter(
        (vl) => vl.cpf.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }
    if (field === 'telefone') {
      rows = rows.filter(
        (vl) => vl.telefone.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }

    this.dataSource = new MatTableDataSource<any>(rows);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  @ViewChild('paginatorH') paginatorH: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginatorH;
  }
}
