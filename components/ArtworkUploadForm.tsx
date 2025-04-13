"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ArtworkUploadForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !title) {
      alert("이미지와 제목은 필수입니다.");
      return;
    }
    console.log({ title, description, image });
    alert("작품 업로드 완료 (실제 업로드는 추후 연결)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold">🎨 작품 업로드</h2>
      <Input type="file" accept="image/*" onChange={handleImageChange} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="w-full rounded-lg object-cover max-h-64" />
      )}
      <Input
        placeholder="작품 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="작품 설명"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">업로드</Button>
    </form>
  );
};