import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonItemSliding, LoadingController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Place } from "../place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Place[];
  isLoading: boolean;
  private placesSub: Subscription;
  constructor(
    private placesService: PlacesService,
    private route: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.offers = places;
    });
    console.log(this.offers);
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.loadingCtrl
      .create({ message: "Loading data..." })
      .then((loadingEl) => {
        loadingEl.present();
        this.placesService.fetchPlaces().subscribe(() => {
          // console.log(data);
          this.isLoading = false;
          this.loadingCtrl.dismiss();
        });
      });
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();

    this.route.navigateByUrl("/places/tabs/offers/edit/" + offerId);
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
