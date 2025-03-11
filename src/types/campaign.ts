
export interface Campaign {
  id: string;
  title: string;
  description: string;
  target: number;
  raised: number;
  endDate: Date;
  imageUrl: string;
  creator: string;
}
