
export interface AnalysisResult {
  title: string;
  score: number;
  sections: SectionDetail[];
  summary: string;
  improvements: string[];
}

export interface SectionDetail {
  name: string;
  status: 'Good' | 'Needs Work' | 'Excellent';
  content: string;
  psychologicalTrigger: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
