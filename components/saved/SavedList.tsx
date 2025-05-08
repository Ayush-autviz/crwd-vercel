import React from 'react';
import SavedItem from './SavedItem';

export interface SavedData {
  avatar: string;
  title: string;
  subtitle: string;
}

interface SavedListProps {
  items: SavedData[];
}

const SavedList: React.FC<SavedListProps> = ({ items }) => (
  <div className="flex flex-col gap-1 pt-2">
    {items.map((item, i) => (
      <SavedItem key={i} {...item} />
    ))}
  </div>
);

export default SavedList; 