import { useState } from "react";

const Create = () => {
  const [title, setTile] = useState("");
  return (
    <div className="Create">
      <h2> Add a New Blog</h2>

      <form>
        <label>form title</label>
        <input type="text" required />
        <label>form body</label>
        <textarea required></textarea>
        <label>form autor</label>
        <select>
          <option value="mario"></option>
          <option value="yosi"></option>
        </select>
      </form>
    </div>
  );
};
export default Create;
