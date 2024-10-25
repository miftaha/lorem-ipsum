import { useState } from 'react'
import text from './data'
import { nanoid } from 'nanoid'

function App() {
  const [count, setCount] = useState(1)
  const [texts, setTexts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTexts([...texts, text.slice(0, count)])
  }
  return (
    <section className="w-4/5 max-w-[80rem] my-40 mx-auto">
      <h2 className="font-normal text-2xl text-center tracking-wide text-blue-950 capitalize p-3">
        tired of boring lorem ipsum?
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-2 capitalize mt-8 mb-16 tracking-widest"
      >
        <label className="text-xl font-normal tracking-widest">
          paragraphs:
        </label>
        <input
          type="number"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="px-2 py-1 text-xl w-16 bg-gray-300 border-transparent rounded-md"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-md capitalize self-stretch">
          generate
        </button>
      </form>
      {texts.map((text) => {
        return (
          <article key={nanoid()} className="mb-8">
            <p className=" leading-8">{text}</p>
          </article>
        )
      })}
    </section>
  )
}

export default App
