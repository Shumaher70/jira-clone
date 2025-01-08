import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

import { TaskStatus } from "../types";
export const useTaskFilters = () => {
  return useQueryStates({
    search: parseAsString,
    dueDate: parseAsString,
    projectId: parseAsString,
    assigneeId: parseAsString,
    status: parseAsStringEnum(Object.values(TaskStatus)),
  });
};
