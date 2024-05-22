import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-connect-api",
  templateUrl: "./connect-api.component.html",
  styleUrls: ["./connect-api.component.scss"],
})
export class ConnectApiComponent implements OnInit {
  apiUrl = "http://localhost:3000/api/patate";
  responseData: any;
  name: string = "";
  value: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    /*     this.http.get(this.apiUrl).subscribe((data: any) => {
      this.responseData = data;
    }); */
  }

  send() {
    const body = { name: this.name, value: this.value };

    /*        this.http.post(this.apiUrl, body).pipe(
          (response) => {
            console.log("Post request successful:", response);
          },
          (error) => {
            console.error("Error making post request:", error);
          }
        );
 */
    this.http
      .post<any>(
        this.apiUrl + "?name=" + this.name + "&value=" + this.value,
        body
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          /* this.errorMessage = error.message; */
          console.error("There was an error!", error);
        },
      });
  }
}
