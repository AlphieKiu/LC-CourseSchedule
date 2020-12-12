export class Course {
    title = 'Now you are a developer';
    code = 'LC102';
    days = ['Monday','Wednesday'];
    startTime = '5pm';
    endTime = '6pm';
    credits = 1;

    constructor(title: string, code: string, days:[string], startTime: string, endTime: string, credits:number) { 
        this.title = title;
        this.code = code;
        this.days = days;
        this.startTime = startTime;
        this.endTime = endTime;
        this.credits = credits;
      }
}
