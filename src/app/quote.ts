export class Quote {
    id:number;
    text:string;
    author:string;
    timePassed:Date;
    vote?:{
        upVote:number,
        downVote:number
    }

    // constructor(public text:string, public author:string, public timePassed:Date, 
    //     public vote?:{ upVote:number, downVote:number}){



    // }
}
