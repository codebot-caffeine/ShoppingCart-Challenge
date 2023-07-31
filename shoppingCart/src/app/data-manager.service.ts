import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class dataService{
    constructor(private httpClient: HttpClient,private router: Router){

    }

    getUpdatedOptions() {
        let options = {
            headers: this.getUpdatedHeaders(),
        };
        return options;
    }


    getUpdatedHeaders() {
        // let token :string |string[] = localStorage.getItem('token')
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // 'x-access-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
        });
        return headers;
    }

    checkErrorResponse(data: any) {
        try {
            if (!data.status) {
               this.router.navigate(['/']) 
            }

            return true;
        }
        catch (Exception) {
            return false;
        }
	}

    APIGenericGetMethod(entity: string, prefix: string) {
        let url = prefix + entity;
        return this.httpClient.get(url, this.getUpdatedOptions()).pipe(
            map((response: any) => {
                var data = response;
                var obj: any = {};
                if (!!this.checkErrorResponse(data)) {
                    obj.response = data.response;
                    obj.status = data.status;
                    obj.error = data.error;
                    return obj;
                }
            })
        );
    }

    APIGenericPostMethod(entity: string, entityObject: {}, prefix: string) {
        let url = prefix + entity;
        return this.httpClient
            .post(url, entityObject, this.getUpdatedOptions())
            .pipe(
                map((response: any) => {
                    var data = response;
                    var obj: any = {};
                    if (!!this.checkErrorResponse(data)) {
                        obj.response = data.response;
                        obj.status = data.status;
                        obj.error = data.error;
                        return obj;
                    }
                })
            );
    }
}