import EditCrwdClient from './EditCrwdClient';

// Generate static params for CRWD IDs
export async function generateStaticParams() {
  // You can add your actual CRWD IDs here
  // For now, I'll add some sample IDs
  const crwdIds = ['1', '2', '3', '4', '5'];
  
  return crwdIds.map((id) => ({
    id: id,
  }));
}

export default async function EditCrwdPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  return <EditCrwdClient params={{ id }} />;
} 