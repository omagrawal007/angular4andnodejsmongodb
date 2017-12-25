import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ModalController } from 'ionic-angular';



@Injectable()
export class AlertMessageService {
    constructor(public alertMessage: AlertController, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) { }

    public alertMessageShow = function (message: string, alertTitle: string) {
        let alert1 = this.alertMessage.create({
            title: alertTitle,
            subTitle: message,
            buttons: ['OK']
        });
        alert1.present();
    }
    public presentModal = function (ModalPage) {
        let modal = this.modalCtrl.create(ModalPage);
        modal.present();
    }
    public actionSheetFn = function () {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();


    }


}