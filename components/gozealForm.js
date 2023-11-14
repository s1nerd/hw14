import { useState } from "react";

const gozealForm = (onGozealCreated) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setNewGozeal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/gozeals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, description: description }),
      });

      if (res.ok) {
        const createdGozeal = await Response.json();
        onGozealCreated(createdGozeal);
        setNewGozeal("");
      } else {
        console.error("Error creating gozeal");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Gozeal</button>
    </form>
  );
};

export default gozealForm;
