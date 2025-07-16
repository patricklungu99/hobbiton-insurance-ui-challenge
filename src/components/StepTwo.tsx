interface Props {
  next: () => void
  back: () => void
  updateForm: (data: any) => void
  data: any
}

export default function StepTwo({ next, back, updateForm, data }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({ [e.target.name]: e.target.value })
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Owner Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={data.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        name="nrc"
        placeholder="NRC Number"
        value={data.nrc}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Number"
        value={data.contact}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">
          Back
        </button>
        <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </>
  )
}
