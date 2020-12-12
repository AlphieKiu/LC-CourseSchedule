export class Course {
 
    constructor( title: string, code: string, private days:string[], startTime: string, endTime: string, credits:number) {}

    getDays() {
        return this.days.join("/")
    }
}
