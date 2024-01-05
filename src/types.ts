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

export interface FeedbackResponse {
  feedback: Feedback[]
  success: string
}

export interface Feedback {
  id?: string;
  title: string;
  category: string;
  details: string;
  Upvotes?: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FeedbackState {
  feedback: Feedback[]
  loading: boolean,
  error: string | null
}