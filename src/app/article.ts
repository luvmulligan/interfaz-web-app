export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  type: string;
  artist: string;
  artistLink: string;
  heroImgUrl: string;
  thumbnail: string;
  interview?: boolean;
  review?: boolean;
  analysis?: boolean;
  galleryImages: [
    {id: number;
      url: string;
    altText: string}
  ];
  content: {
    heading: string;
    intro: string;
    items: [
      {
      qId: number;
      content: string;
      }
    ];
  }

}





