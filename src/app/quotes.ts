export class Quotes {
  constructor(public id : number, public name : string, public author : string, public submitter : string, public upVote : number, public downVote : number, public published : Date ){
  this.id =id;
  this.name = name;
  this.author =author;
  this.submitter = submitter;
  this.upVote =upVote;
  this.downVote =downVote;
  this.published= published;
  }
}
