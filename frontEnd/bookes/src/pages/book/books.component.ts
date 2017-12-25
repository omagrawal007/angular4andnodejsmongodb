

import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AlertMessageService } from '../../app/services/core/message.services';
import { ContactPage } from '../contact/contact';
// import {AlertMessageService } from './services/message.services';
@Component({
    templateUrl: 'books.html',
    providers: [AlertMessageService]
})
export class books {
    constructor(private toastCtrl: ToastController, public AlertMessage: AlertMessageService) { }
    alertMessage = function () {
        this.AlertMessage.alertMessageShow("this is testing", "error");
    }
    actionSheetFn = function () {
        this.AlertMessage.actionSheetFn();

    }
    presentModal = function () {
        this.AlertMessage.presentModal(ContactPage);

    }
    // actionSheet

    presentToast = function () {
        let toast = this.toastCtrl.create({
            message: 'This is testing',
            duration: 1000
        });
        toast.present();
    }
}