import { labels } from '@/data/companyData';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {labels.header.title}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-light opacity-90">
            {labels.header.subtitle}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
