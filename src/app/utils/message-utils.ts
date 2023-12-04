import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from '../components/modal-confirmacao/modal-confirmacao.component';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { ModalTotalizadorComponent } from '../components/modal-totalizador/modal-totalizador.component';

@Injectable({
  providedIn: 'root',
})
export class MessageUtils {
  constructor(
    private _matSnackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) {}

  public showSimpleMessage(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this._matSnackBar.open(message, 'OK', { duration: 6000 });
  }

  public getConfirmDialogRef(
    confirmMessage: string
  ): MatDialogRef<ModalConfirmacaoComponent, any> {
    const confirmDialogRef = this._matDialog.open(ModalConfirmacaoComponent, {
      panelClass: 'fuse-confirm-dialog',
      disableClose: false,
    });

    confirmDialogRef.componentInstance.confirmMessage = confirmMessage;
    return confirmDialogRef;
  }

  public getTotalsDialogRef(
    data: any
  ): MatDialogRef<ModalTotalizadorComponent, any> {
    const totalsDialogRef = this._matDialog.open(ModalTotalizadorComponent, {
      panelClass: 'fuse-totals-dialog',
      disableClose: false,
    });

    totalsDialogRef.componentInstance.data = data;
    return totalsDialogRef;
  }
}
