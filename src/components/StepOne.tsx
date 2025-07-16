interface Props {
  next: () => void
  updateForm: (data: any) => void
  data: any
}

export default function StepOne({ next, updateForm, data }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({ [e.target.name]: e.target.value })
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Vehicle Information</h2>
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={data.make}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={data.model}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={data.year}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Next
      </button>
    </>
  )
}
