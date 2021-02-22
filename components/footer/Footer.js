const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex flex-row justify-center w-full h-20 m-auto text-center ">
      <div className="flex flex-col m-auto">Built by his good pal Steve</div>
      <div className="flex flex-col m-auto">
        <ul className="flex">
          <li className="p-2 m-2">
            <a href="https://github.com/collinoo" target="_blank">
              <i className="text-gray-100 hover:text-green-300 fab fa-github" />
            </a>
          </li>
          <li className="p-2 m-2">
            <a href="https://twitter.com/collinhacks" target="_blank">
              <i className="text-gray-100 hover:text-green-300 fab fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
