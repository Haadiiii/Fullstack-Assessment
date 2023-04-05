import { Triangle } from 'react-loader-spinner';

const Spiner = () => (
  <div className="flex items-center justify-center fixed z-50 top-0 left-0 bg-black w-[100%] h-[100vh]">
    <Triangle
      height="100"
      width="100"
      color="yellow"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible
    />
  </div>
);

export default Spiner;
