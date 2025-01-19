import { ChangeEvent, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState<string>("");

  const onSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`${import.meta.env.VITE_REACT_SERVER_URL}/api/create-todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
			setDescription('')
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5 justify-content-center" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control w-50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success ml-4">Add</button>
      </form>
    </>
  );
};

export default InputTodo;