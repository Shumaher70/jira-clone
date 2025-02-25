import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { AnalyticsCard } from "./analytics-card";

import { DottedSeparator } from "./dotted-separator";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="w-full shrink-0 whitespace-nowrap rounded-lg border">
      <ScrollBar orientation="horizontal" />
      <div className="flex w-full flex-row">
        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Total Tasks"
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Assigned Tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskCount > 0 ? "up" : "down"}
            increaseValue={data.assignedTaskCount}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Completed Tasks"
            value={data.completedTaskCount}
            variant={data.completedTaskCount > 0 ? "up" : "down"}
            increaseValue={data.completedTaskCount}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Incomplete Tasks"
            value={data.inCompleteTaskCount}
            variant={data.inCompleteTaskCount > 0 ? "up" : "down"}
            increaseValue={data.inCompleteTaskCount}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex flex-1 items-center">
          <AnalyticsCard
            title="Overdue Tasks"
            value={data.overDueTaskCount}
            variant={data.overDueTaskCount > 0 ? "up" : "down"}
            increaseValue={data.overDueTaskCount}
          />
          <DottedSeparator direction="vertical" />
        </div>
      </div>
    </ScrollArea>
  );
};
