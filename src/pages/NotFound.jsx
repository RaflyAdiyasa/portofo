import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <Container className="py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Page not found
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          <FaHome className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </Container>
  );
}