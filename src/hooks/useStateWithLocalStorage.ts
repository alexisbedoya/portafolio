import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useStateWithLocalStorage = (
  localStorageKey: string
): [any | undefined, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(
    localStorage.getItem(localStorageKey) || ''
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value, setValue];
};
