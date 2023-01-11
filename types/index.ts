export interface HistoryCardProps {
  day: string;
  history: Array<{
    product: string;
    categories: string[];
    makers: string[];
  }>;
}
