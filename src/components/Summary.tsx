interface Props {
  back: () => void
  data: any
}

export default function Summary({ back, data }: Props) {
  const handleSubmit = () => {
    alert('Quote submitted!\n\n' + JSON.stringify(data, null, 2))
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="mb-4">
        <p><strong>Make:</strong> {data.make}</p>
        <p><strong>Model:</strong> {data.model}</p>
        <p><strong>Year:</strong> {data.year}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>NRC:</strong> {data.nrc}</p>
        <p><strong>Contact:</strong> {data.contact}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit Quote
        </button>
      </div>
    </>
  )
}
