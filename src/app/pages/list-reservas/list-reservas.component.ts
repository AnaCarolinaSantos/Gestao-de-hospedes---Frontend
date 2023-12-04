import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from '../../service/reserva.service';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.component.html',
  styleUrl: './list-reservas.component.scss',
})
export class ListReservasComponent implements AfterViewInit {

  public rows: any[];
  public displayedColumns: string[];
  public dataSource = new MatTableDataSource<any>();

  constructor(private _service: ReservaService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this._service.listar().then((lista: any[]) => {
      this.rows = lista;
      this.displayedColumns = [
        'id',
        'hospede',
        'data_inicial',
        'data_final',
        'check-in',
        'checkout',
        'acao',
      ];
      this.dataSource = new MatTableDataSource<any>(this.rows);
    });
  }

  @ViewChild('paginatorR') paginatorR: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginatorR;
  }
}
