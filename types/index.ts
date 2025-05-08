export interface Task {
  uuid: string;
  name: string;
  runtime: string;
  started: number;
  state: "STARTED" | "FAILURE" | "SUCCESS";
}

export interface File {
  id: string;
  name: string;
  file_url: string;
  created_at: string;
}
