import { Injectable } from "@angular/core";
import { BehaviorSubject, of, pipe } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Place } from "./place.model";
import { take, map, tap, delay, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { PlaceLocation } from './location.model';

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  location: PlaceLocation
}
// new Place(
//   "p1",
//   "Manhattan Mansion",
//   "In the heart of New York City",
//   "https://asginvestigations.com/background_checks/wp-content/uploads/sites/2/2018/07/Real-New-York-Background-Check.jpg",
//   149.99,
//   new Date("2019-01-01"),
//   new Date("2019-12-31"),
//   "xyz"
// ),
// new Place(
//   "p2",
//   "Eiffel Tower",
//   "Best place in Paris",
//   "https://static.toiimg.com/thumb/69359415/paris.jpg?width=1200&height=900",
//   89.99,
//   new Date("2019-01-01"),
//   new Date("2019-12-31"),
//   "abc"
// ),
// new Place(
//   "p3",
//   "Times Square",
//   "world's busiest pedestrian areas",
//   "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
//   399.99,
//   new Date("2019-01-01"),
//   new Date("2019-12-31"),
//   "abc"
// ),

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([]);

  //switchmap returns observable
  //map returns non observable data
  //take(1) takes only 1 object or the latest object
  //tap collects the data and can perform any operation on recieved data
  constructor(private authService: AuthService, private http: HttpClient) {}

  get places() {
    return this._places.asObservable();
  }

  fetchPlaces() {
    return this.http
      .get("https://ionic-angular-app-fc39f.firebaseio.com/offered-places.json")
      .pipe(
        map((resData) => {
          const places = [];
          for (const key in resData) {
            console.log(key, "key");
            if (resData.hasOwnProperty(key)) {
              places.push(
                new Place(
                  key,
                  resData[key].title,
                  resData[key].description,
                  resData[key].imageUrl,
                  resData[key].price,
                  new Date(resData[key].availableFrom),
                  new Date(resData[key].availableTo),
                  resData[key].userId,
                  resData[key].location
                )
              );
              console.log(places);
            }
          }
          return places;
          // return [];
        }),
        tap((places) => {
          this._places.next(places);
        })
      );
  }

  getPlace(id: string) {
    return this.http
      .get<PlaceData>(
        `https://ionic-angular-app-fc39f.firebaseio.com/offered-places/${id}.json`
      )
      .pipe(
        map((placeData) => {
          console.log(placeData);
          return new Place(
            id,
            placeData.title,
            placeData.description,
            placeData.imageUrl,
            placeData.price,
            new Date(placeData.availableFrom),
            new Date(placeData.availableFrom),
            placeData.userId,
            placeData.location
          );
        })
      );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
    location : PlaceLocation
  ) {
    let generatedId: string;
    let newPlace : Place;
    return this.authService.userId.pipe(take(1),switchMap(userId=>{
      if(!userId){
        throw new Error("No user Found");
      }
      newPlace = new Place(
        Math.random().toString(),
        title,
        description,
        "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
        price,
        dateFrom,
        dateTo,
        userId,
        location
      );
      return this.http
        .post<{ name: string }>(
          "https://ionic-angular-app-fc39f.firebaseio.com/offered-places.json",
          { ...newPlace, id: null }
        )
    })).pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.places;
        }),
        take(1),
        tap((places) => {
          newPlace.id = generatedId;
          this._places.next(places.concat(newPlace));
        })
      );
    //   take(1),
    //   delay(1000),
    //   tap((places) => {
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updatePlace(placeId: string, title: string, description: string) {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1),
      switchMap((places) => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          return of(places);
        }
      }),
      switchMap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => {
          return pl.id == placeId;
        });
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId,
          oldPlace.location
        );
        return this.http.put(
          `https://ionic-angular-app-fc39f.firebaseio.com/offered-places/${placeId}.json`,
          { ...updatedPlaces[updatedPlaceIndex], id: null }
        );
      }),
      tap(() => {
        this._places.next(updatedPlaces);
      })
    );
  }

  // uploadImage(image: File){
  //   const uploadData = new FormData();
  //   uploadData.append('image',image);

  //   this.http.post('')
  // }
}
