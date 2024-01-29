import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import createPostAPI from "../api/createPost";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("subTitle", summary);
    data.set("blogContent", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await createPostAPI(data);

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form onSubmit={createPost} className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow-lg">
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
    Create post
  </button>
</form>

  );
}
