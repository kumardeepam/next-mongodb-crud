export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-f00 px-8 py-2"
        type="text"
        placeholder="Enter title for this topic"
      />

      <input
        className="border border-slate-f00 px-8 py-2"
        type="text"
        placeholder="Enter description for this topic"
      />

      <button className=" bg-green-600 font-bold text-white px-12 py-2 w-fit">
        Update
      </button>
    </form>
  );
}
