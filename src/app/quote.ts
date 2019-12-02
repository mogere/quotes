export class Quote {
    text:string;
    author:string;
    timePassed:Date;
    upVote:number;
    downVote:number;
    

    constructor( text,  author,  timePassed, 
       upVote, downVote){
        this.text=text;
        this.author=author;
        this.timePassed=timePassed;
        this.upVote=upVote;
        this.downVote=downVote;


    }
    setUpVote(addition:number){
        this.upVote+=1;
    }
    setDownVote(addition:number){
        this.downVote+=1;
    }
}
