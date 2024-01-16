// components/NotebookList.tsx
import React from "react";

interface Notebook {
  id: number;
  name: string;
  brand: string;
  price: number;
}

interface NotebookListProps {
  notebooks: Notebook[];
}

const NotebookList: React.FC<NotebookListProps> = ({ notebooks }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Available Notebooks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {notebooks.map((notebook) => (
          <div
            key={notebook.id}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">{notebook.name}</h3>
            <p className="text-gray-700 mb-2">{notebook.brand}</p>
            <p className="text-xl font-bold text-blue-500">${notebook.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotebookList;
