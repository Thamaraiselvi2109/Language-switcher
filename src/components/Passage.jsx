import { useContext } from 'react';
import { Context } from '../context/ContextProvider';

const Passage = () => {
  const { t } = useContext(Context);

  return (
    <p className="text-lg leading-8 text-justify text-gray-700">
      {t('paragraph')}
    </p>
  );
};

export default Passage;
