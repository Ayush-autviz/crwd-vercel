import ProfileEditClient from './ProfileEditClient';

// Generate static params for profile IDs
export async function generateStaticParams() {
  // You can add your actual profile IDs here
  // For now, I'll add some sample IDs
  const profileIds = ['1', '2', '3', '4', '5'];
  
  return profileIds.map((id) => ({
    id: id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return <ProfileEditClient params={{ id }} />;
}
