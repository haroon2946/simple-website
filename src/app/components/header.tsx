import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
