import ProfileEditClient from './ProfileEditClient';

// Generate static params for profile IDs
export async function generateStaticParams() {
  // Add actual profile IDs/usernames used in the app
  const profileIds = [
    '1', '2', '3', '4', '5', '123',
    'Mya', 'myamakes_moves', 'mynameismya',
    'chad', 'miacares1', 'conradm1', 'moremorgan', 'ash_t2001', 
    'makinmymarc', 'carebear', 'rawells', 'bburke', 'maxf',
    'janedoe', 'johnsmith', 'aliceblue', 'chrisred', 'miagreen', 'samyellow',
    'mandy', 'conrad', 'emma_321', 'rachelwilson'
  ];
  
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
