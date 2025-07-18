import { useCurrentOrg } from '@/features/orgs/projects/hooks/useCurrentOrg';
import { useProject } from '@/features/orgs/projects/hooks/useProject';
import { useUserData } from '@/hooks/useUserData';
import { Organization_Members_Role_Enum } from '@/utils/__generated__/graphql';

/**
 * Returns true if the current user is the owner of the current organization.
 *
 * @returns True if the current user is the owner of the current organization.
 */
export default function useIsCurrentUserOwner() {
  const { org, loading: loadingOrg } = useCurrentOrg();
  const { loading: loadingProject } = useProject();
  const currentUser = useUserData();

  if (loadingOrg || loadingProject || !org?.members || !currentUser) {
    return false;
  }

  return org.members.some(
    (member) =>
      member.user.id === currentUser.id &&
      member.role === Organization_Members_Role_Enum.Admin,
  );
}
