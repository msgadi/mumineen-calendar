const Footer = () => {
  return (
    <h3 className="flex flex-start justify-center text-sm mt-5">
      © {new Date().getFullYear()}, Proudly made by{" "}
      <a className="text-blue-400" href="http://mohammedgadi.com">
        &nbsp; Mohammed Gadi
      </a>
      . All rights reserved. Made with Next.js and Tailwind CSS
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </h3>
  );
};

export default Footer;
