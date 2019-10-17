function Footer() {
  return (
    <footer className="bg-blue-500">
      <ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
        <li>
          Created by{' '}
          <a
            href="https://www.lukebennett.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Luke Bennett
          </a>
        </li>

        <li>
          <a
            href="https://github.com/lukebennett88/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
