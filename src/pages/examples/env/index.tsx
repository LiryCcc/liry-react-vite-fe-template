import { useState } from 'react';

const EnvExample = () => {
  const [envName, setEnvName] = useState('');
  const [envValue, setEnvValue] = useState<string>();
  return (
    <div>
      <input
        onChange={(e) => {
          setEnvName(e.target.value);
          console.log(e.target.value);
        }}
        value={envName}
      />
      <button
        onClick={() => {
          console.log(123);
          console.log(import.meta.env);
          setEnvValue(import.meta.env[envName]);
        }}
      >
        {'点击获得env的值'}
      </button>
      <div>{`值：${envValue}`}</div>
    </div>
  );
};

export default EnvExample;
