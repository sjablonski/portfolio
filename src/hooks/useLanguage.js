import { useState } from 'react';
import * as allLanguage from 'languages';

function useLanguage() {
  const [language, setLanguage] = useState(allLanguage.pl);

  const changeLanguage = (newLang) => {
    setLanguage(allLanguage[newLang]);
  };

  return [language, changeLanguage];
}

export default useLanguage;
