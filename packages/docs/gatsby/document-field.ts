export interface DocumentField {
  name: string;
  content: Content[];
}

export interface Content {
  body: string;
  display?: string;
}
