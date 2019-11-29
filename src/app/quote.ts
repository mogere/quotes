export class Quote {

    constructor(public text:string, public author:string, public timePassed:Date, 
        public vote?:{ upVote:number, downVote:number}){

    }
}
