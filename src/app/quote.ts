export class Quote {
    text:string;
    author:string;
    timePassed:Date;
    vote?:{
        upVote:number,
        downVote:number
    }

    constructor( text,  author,  timePassed, 
      vote:{ upVote, downVote}){
        this.text=text;
        this.author=author;
        this.timePassed=timePassed;
        this.vote=vote;


    }
}
