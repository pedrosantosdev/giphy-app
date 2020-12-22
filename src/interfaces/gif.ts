export default interface IGif {
  type: string;
  id: string;
  url: string;
  bitly_url: string;
  rating: string;
  title: string;
  images: {
    downsized: IImage;
    downsized_small: IImage;
    original: IImage;
    looping: IImage;
  };
}

interface IImage {
  url: string;
  width?: string;
  height?: string;
  size?: string;
  mp4?: string;
}
