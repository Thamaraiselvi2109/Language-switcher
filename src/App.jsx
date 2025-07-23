import { useContext } from 'react';
import { Context } from './context/ContextProvider';
import Passage from './components/Passage';

function App() {
  const { handleChange } = useContext(Context);

  return (
      <div className="w-full p-6 bg-white container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">🌍 Language Switcher</h1>
          <select
            name="language"
            id="language"
            onChange={handleChange}
            className="selectbtn"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
        <Passage />
      </div>
  );
}

export default App;
