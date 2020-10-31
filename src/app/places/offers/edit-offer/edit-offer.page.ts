import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, LoadChildren, Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { Subscription } from "rxjs";
import { Place } from "../../place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  form: FormGroup;
  private placeSub: Subscription;
  isLoading: boolean;
  placeId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.placeId = paramMap.get("placeId");

      this.isLoading = true;
      this.loadingCtrl.create({ message: "Loading..." }).then((loadingEl) => {
        loadingEl.present();

        this.placeSub = this.placesService
          .getPlace(paramMap.get("placeId"))
          .subscribe(
            (place) => {
              this.place = place;

              this.form = new FormGroup({
                title: new FormControl(this.place.title, {
                  updateOn: "blur",
                  validators: [Validators.required],
                }),
                description: new FormControl(this.place.description, {
                  updateOn: "blur",
                  validators: [Validators.required, Validators.maxLength(180)],
                }),
              });
              this.isLoading = false;
              loadingEl.dismiss();
            },
            (error) => {
              this.alertCtrl
                .create({
                  header: "error occured",
                  message:
                    "Place could not be fetched. Please try again later...",
                  buttons: [
                    {
                      text: "okay",
                      handler: () => {
                        this.router.navigate(["/places/tabs/offers"]);
                      },
                    },
                  ],
                })
                .then((alertEl) => {
                  loadingEl.dismiss();
                  alertEl.present();
                });
            }
          );
      });
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({ message: "Updating Place...." })
      .then((loadingEl) => {
        loadingEl.present();
        this.placesService
          .updatePlace(
            this.place.id,
            this.form.value.title,
            this.form.value.description
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();

            this.router.navigate(["/places/tabs/offers"]);
          });
      });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
