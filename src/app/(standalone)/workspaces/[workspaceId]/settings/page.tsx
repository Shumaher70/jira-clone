import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/queries";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const id = await params;
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValue = await getWorkspace({
    workspaceId: id.workspaceId,
  });

  if (!initialValue) {
    redirect(`/workspaces/${id.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValue} />
    </div>
  );
};
export default WorkspaceIdSettingsPage;
