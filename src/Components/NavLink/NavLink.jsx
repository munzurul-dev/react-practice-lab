const NavLink = ({ navLinkData }) => {
  const { name, link } = navLinkData;
  return (
    <div>
      <li className="hover:bg-orange-500 md:hover:bg-green-500 hover:p-2 hover:text-center hover:rounded-2xl md:text-black  text-white hover:text-white">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default NavLink;
