import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MessageUtils } from '../utils/message-utils';

@Injectable({
  providedIn: 'root',
})
export class HospedeService {
  private URL = `${environment.apiUrl}/hospedes`;

  constructor(private _http: HttpClient, private _messageUtils: MessageUtils) {}

  listar() {
    return this._http
      .get(this.URL)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  listarHospedesNoHotel() {
    return this._http
      .get(`${this.URL}/no-hotel`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  listarHospedesComReservaSemCheckIn() {
    return this._http
      .get(`${this.URL}/sem-check-in`)
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
        this._messageUtils.showSimpleMessage('Hóspede cadastrado com sucesso.');
      });
  }

  atualizar(id: number, data: any) {
    return this._http
      .put(`${this.URL}/${id}`, data)
      .toPromise()
      .then(() => {
        this._messageUtils.showSimpleMessage('Hóspede atualizado com sucesso.');
      });
  }

  excluir(id: number) {
    return this._http
      .delete(`${this.URL}/${id}`)
      .toPromise()
      .then(() => {
        this._messageUtils.showSimpleMessage('Hóspede excluído com sucesso.');
      });
  }
}
