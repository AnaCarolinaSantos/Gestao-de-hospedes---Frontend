import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MessageUtils } from '../utils/message-utils';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private URL = `${environment.apiUrl}/reservas`;

  constructor(private _http: HttpClient, private _messageUtils: MessageUtils) {}

  listar() {
    return this._http
      .get(this.URL)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  buscar(id: number) {
    return this._http.get(`${this.URL}/${id}`).toPromise();
  }

  cadastrar(data: any) {
    return this._http
      .post(this.URL, data)
      .toPromise()
      .then(() => {
        this._messageUtils.showSimpleMessage('Reserva cadastrada com sucesso.');
      });
  }

  atualizar(id: number, data: any) {
    return this._http
      .put(`${this.URL}/${id}`, data)
      .toPromise()
      .then(() => {
        this._messageUtils.showSimpleMessage('Reserva atualizada com sucesso.');
      });
  }

  excluir(id: number) {
    return this._http
      .delete(`${this.URL}/${id}`)
      .toPromise()
      .then(() => {
        this._messageUtils.showSimpleMessage('Reserva excluída com sucesso.');
      });
  }
}
