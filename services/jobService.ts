import { jobs } from "../data/jobs";
import { Job } from "../types/job";

export const getJobs = (): Job[] => {
  return jobs;
};

export const getJobById = (id: string): Job | undefined => {
  return jobs.find((job) => job.id === id);
};