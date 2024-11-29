import { Loader } from "lucide-react";

const DashboardLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default DashboardLoading;
