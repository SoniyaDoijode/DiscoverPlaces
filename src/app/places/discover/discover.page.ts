import { Component, OnDestroy, OnInit } from "@angular/core";
import { LoadingController, MenuController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { take } from 'rxjs/operators';
import { AuthService } from "src/app/auth/auth.service";
import { Place } from "../place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  isLoading: boolean;
  listedLoadedPlaces: Place[];
  private placesSub: Subscription;
  relevantPlaces: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.loadingCtrl
      .create({ message: "Loading Data..." })
      .then((loadingEl) => {
        this.isLoading = false;
        loadingEl.present();

        this.placesService.fetchPlaces().subscribe(() => {
          loadingEl.dismiss();
        });
      });
  }

  onFilterUpdate(event: CustomEvent) {
    this.authService.userId.pipe(take(1)).subscribe(userId =>{
      if (event.detail.value === "all") {
        this.relevantPlaces = this.loadedPlaces;
        this.listedLoadedPlaces = this.relevantPlaces.slice(1);
      } else {
        this.relevantPlaces = this.loadedPlaces.filter((place) => {
          return place.userId !== userId;
        });
        this.listedLoadedPlaces = this.relevantPlaces.slice(1);
      }
    })
   
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
  // onOpenMenu() {
  //   this.menuCtrl.toggle();
  // }
}
