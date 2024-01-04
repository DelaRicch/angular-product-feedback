// Enums
export enum ButtonType {
  Button = "button",
  Submit = "submit",
}

// Types 
export interface RoadmapProps {
  label: string;
  color: string;
  quantity: number;
}

export interface Feedback {
  id: number;
  title: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
}

export interface FeedbackState {
  feedback: Feedback[]
  loading: boolean,
  error: string | null
}