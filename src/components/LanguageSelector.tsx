
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'hi');
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="inline-flex w-full rounded-md shadow-sm">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default LanguageSelector;
