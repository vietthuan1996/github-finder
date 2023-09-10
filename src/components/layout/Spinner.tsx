import spinner from './assets/spinner.gif';

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className='mt-20'>
      <img width={100} className='text-center mx-auto' src={spinner} alt='' />
    </div>
  );
};

export default Spinner;
