import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

export default function EditPost() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const handleSinglePost = async () => {
      const response = await fetch(
        `http://blog-api.onrender.com/api/v1/blogs/post/${params.id}`,
        {
          credentials: "include",
        }
      );
      const postData = await response.json();
      setTitle(postData?.data?.title || "");
      setSummary(postData?.data?.subTitle || "");
      setContent(postData?.data?.blogContent || "");
    };

    handleSinglePost();
  }, [params.id]);
console.log(title, summary, content,);

  const handleUpdatePost = async (e) => {
    try {
      const data = new FormData();
      data.set("title", title);
      data.set("subTitle", summary);
      data.set("blogContent", content);
      data.set("file", files[0]);
      console.log(">>>",data)
      e.preventDefault();
      const response = await fetch(
        `http://blog-api.onrender.com/api/v1/blogs/edit-post/${params.id}`,
        {
            method:"PATCH",
            credentials:"include",
            body: data
        }
      );
      if (response.ok) setRedirect(true)
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Navigate to={`/post/${params.id}`} />;
  }
  return (
    <form
      onSubmit={handleUpdatePost}
      className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow-lg"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 mb-4"
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 mb-4"
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 mb-4"
      />
      <Editor value={content} onChange={setContent} className="mb-4" />
      <button
        type="submit"
        style={{ marginTop: "5px" }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Post
      </button>
    </form>
  );
}
