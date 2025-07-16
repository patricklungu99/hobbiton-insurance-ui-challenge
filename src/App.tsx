import { useState } from 'react'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import Summary from './components/Summary'

const App = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    name: '',
    nrc: '',
    contact: '',
  })

  const next = () => setStep((prev) => prev + 1)
  const back = () => setStep((prev) => prev - 1)

  const updateForm = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        {step === 1 && <StepOne next={next} updateForm={updateForm} data={formData} />}
        {step === 2 && <StepTwo next={next} back={back} updateForm={updateForm} data={formData} />}
        {step === 3 && <Summary back={back} data={formData} />}
      </div>
    </div>
  )
}

export default App
