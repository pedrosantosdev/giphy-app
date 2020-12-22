export default interface Gif {
  type: string;
  id: string;
  url: string;
  bitly_url: string;
  rating: string;
  title: string;
  images: {
    downsized: Image;
    downsized_small: Image;
    original: Image;
    looping: Image;
  };
}

interface Image {
  url: string;
  width?: string;
  height?: string;
  size?: string;
  mp4?: string;
}
