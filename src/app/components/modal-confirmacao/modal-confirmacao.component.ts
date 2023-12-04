import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
})
export class ModalConfirmacaoComponent {
  public confirmMessage: string;
  public confirmMessageBold: boolean;
  public detailMessage: string;

  constructor(public dialogRef: MatDialogRef<ModalConfirmacaoComponent>) {}
}
