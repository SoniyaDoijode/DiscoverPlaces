import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
} from "@ionic/angular";
import { Subscription } from "rxjs";
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from "src/app/auth/auth.service";
import { BookingService } from "src/app/bookings/booking.service";
import { CreateBookingComponent } from "src/app/bookings/create-booking/create-booking.component";
import { Place } from "../../place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable: boolean;
  private placeSub: Subscription;
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.isLoading = true;
      let fetchedUserId: string;
      this.authService.userId.pipe(take(1),switchMap(userId=>{
        if(!userId){
          throw new Error("Found no user!")
        }
        this.loadingCtrl
        .create({
          message: "Loading...",
        })
        .then((loadingEl) => {
          loadingEl.present();
          loadingEl.dismiss();
      });
      fetchedUserId = userId;
      return this.placesService
      .getPlace(paramMap.get("placeId"));
      }))
       .subscribe(
              (place) => {
                this.place = place;
                this.isBookable = place.userId !== fetchedUserId;
                this.isLoading = false;
               
              },
              (error) => {
                this.isLoading = false;
                this.alertCtrl
                  .create({
                    header: "An error occured",
                    message: "Could not load place!",
                    buttons: [
                      {
                        text: "okay",
                        handler: () => {
                          this.router.navigate(["/places/tabs/discover"]);
                        },
                      },
                    ],
                  })
                  .then((alertEl) => {
                    alertEl.present();
                  });
              }
            );
       
    });
  }

  onBookPlace() {
    // this.route.navigateByUrl("/places/tabs/discover"); //shows animation of adding page to stack
    // this.navCtrl.navigateBack("/places/tabs/discover"); // shows animation of deleting page from stack
    // this.navCtrl.pop();  //not suitable if we refresh on a page, and where it has to navigate

    this.actionSheetCtrl
      .create({
        header: "Choose an action",
        buttons: [
          {
            text: "Select Date",
            handler: () => {
              this.openBookingModal("select");
            },
          },
          {
            text: " Random date",
            handler: () => {
              this.openBookingModal("random");
            },
          },
          {
            text: "Cancel",
            role: "destructive",
          },
        ],
      })
      .then((actionsheetEl) => {
        actionsheetEl.present();
      });
  }

  openBookingModal(mode: "select" | "random") {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === "confirm") {
          this.loadingCtrl
            .create({ message: "Booking Place..." })
            .then((loadingEl) => {
              loadingEl.present();
              const data = resultData.data.bookingData;
              this.bookingService
                .addBooking(
                  this.place.id,
                  this.place.title,
                  this.place.imageUrl,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  data.startDate,
                  data.endDate
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                });
            });
        }
      });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }
}
