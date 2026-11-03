export interface Workspace {
  id: string;
  name: string;
  starterKit: string;
  region: string;
  performance: string;
  createdAt: string;
}

export interface WorkspaceFormData {
  name: string;
  starterKit: string;
  region: string;
  performance: string;
}