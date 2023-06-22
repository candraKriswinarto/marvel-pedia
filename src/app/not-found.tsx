import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col gap-6 items-center justify-center h-screen'>
      <h2 className='text-3xl'>Not Found</h2>
      <Link className='btn btn-primary' href='/'>
        Go Back to Home
      </Link>
    </div>
  );
}
