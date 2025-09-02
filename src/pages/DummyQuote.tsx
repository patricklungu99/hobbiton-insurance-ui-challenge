import { useState } from "react"
import Swal from "sweetalert2";

const DummyQuote = () => {
    const [h, setH] = useState('');

      const handleChange = (value: string) => {

        if(value && value !== 'h' && value !== '') {
            Swal.fire('Oops', 'Value not H', 'error');
            return;
        }

        setH(value);
      };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <p>{h}</p>
            <div className="mt-5">
                <label />
                <input
                    className="w-75 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    id='h-input'
                    type="text"
                    value={h}
                    placeholder="Enter a value H"
                    onChange={(e) => {handleChange(e.target.value)}} 
                />
            </div>
        </div>
    )
}

export default DummyQuote