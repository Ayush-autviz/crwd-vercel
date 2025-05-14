export type Organization = {
  id: string;
  name: string;
  imageUrl: string;
  color?: string;
  shortDesc?: string;
  description?: string;
};

export interface PostDetail {
  id: number;
  avatarUrl: string;
  username: string;
  time: string;
  org: string;
  orgUrl: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}