"use client"
import React from 'react';
import SavedItem from './SavedItem';
import { useRouter } from 'next/navigation';

export interface SavedData {
  avatar: string;
  title: string;
  subtitle: string;
}

interface SavedListProps {
  items: SavedData[];
}

const SavedList: React.FC<SavedListProps> = ({ items }) => {
  const router = useRouter();
  return (
  <div onClick={() => router.push(`/cause`)} className="cursor-pointer flex flex-col gap-1 pt-2">
    {items.map((item, i) => (
      <SavedItem key={i} {...item} />
    ))}
  </div>
)};

export default SavedList; 