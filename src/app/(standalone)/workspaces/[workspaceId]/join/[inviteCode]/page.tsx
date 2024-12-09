import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const { workspaceId } = await params;

  const initialValues = await getWorkspaceInfo({
    workspaceId,
  });

  if (!initialValues) {
    redirect("/");
  }

  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValue={initialValues} />
    </div>
  );
};
export default WorkspaceIdJoinPage;
