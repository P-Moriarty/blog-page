"use client"


import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CreateBlogPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    content: false,
    author: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {
      title: formData.title.trim() === "",
      content: formData.content.trim() === "",
      author: formData.author.trim() === "",
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Blog post created:", formData);
      alert("Blog post created successfully!");
      setFormData({ title: "", content: "", author: "", category: "" }); // Reset form
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {/* Title */}
            <div className="mb-4">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the title"
                value={formData.title}
                onChange={handleChange}
                className={cn(errors.title && "border-red-500")}
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">Title is required.</p>}
            </div>

            {/* Content */}
            <div className="mb-4">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog content here"
                value={formData.content}
                onChange={handleChange}
                className={cn(errors.content && "border-red-500")}
              />
              {errors.content && <p className="text-sm text-red-500 mt-1">Content is required.</p>}
            </div>

            {/* Author */}
            <div className="mb-4">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                placeholder="Enter the author's name"
                value={formData.author}
                onChange={handleChange}
                className={cn(errors.author && "border-red-500")}
              />
              {errors.author && <p className="text-sm text-red-500 mt-1">Author is required.</p>}
            </div>

            {/* Category */}
            <div className="mb-4">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                placeholder="Enter the category (e.g., Technology, Travel)"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Create Post
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default CreateBlogPost;
