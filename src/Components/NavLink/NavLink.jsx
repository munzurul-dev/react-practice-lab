const NavLink = ({ navLinkData }) => {
  console.log(navLinkData);
  const { name, link } = navLinkData;
  return (
    <div>
      <li className="hover:bg-green-500 hover:p-2 hover:text-center hover:rounded-2xl text-black hover:text-white">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default NavLink;
