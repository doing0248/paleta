import React from "react";
import { notFound } from "next/navigation";
import { ArtworkUploadForm } from "@/components/ArtworkUploadForm";

type Artwork = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const artists = [
  {
    id: "1",
    name: "아티스트 홍",
    bio: "창의적인 감성과 독특한 시각으로 그림을 그리는 작가입니다.",
    artworks: [
      {
        id: "a1",
        title: "별이 빛나는 밤에",
        description: "고요한 밤하늘과 별의 조화를 담은 작품.",
        imageUrl: "/sample/starry.jpg",
      },
    ],
  },
];

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">👤 {artist.name}</h1>
        <p className="text-gray-600">{artist.bio}</p>
      </div>
      <ArtworkUploadForm />
      <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">🖼 작품 목록</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {artist.artworks.map((artwork) => (
            <div key={artwork.id} className="border rounded-lg p-4">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="font-semibold text-lg">{artwork.title}</h3>
              <p className="text-sm text-gray-600">{artwork.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}