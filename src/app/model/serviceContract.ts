import { Timestamp, timestamp } from "rxjs";

export class serviceContractModel {
    employer_id: number = 0;
    service_date:Date = new Date(Date.now())
    desc_service: string = '';
}