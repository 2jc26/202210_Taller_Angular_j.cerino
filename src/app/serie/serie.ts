export class Serie{
  id:number;
  name:string;
  channel:string;
  seasons:number;
  sinopsis:string;
  moreInfo:string;
  image:string;
  constructor (id: number, name: string, channel: string,
      seasons:number, sinopsis: string, moreInfo: string, image: string){
        this.id=id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.sinopsis=sinopsis;
        this.moreInfo=moreInfo;
        this.image=image;
  }

}
