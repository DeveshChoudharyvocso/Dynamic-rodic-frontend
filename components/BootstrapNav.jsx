"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../app/style/images/rodic-logo.webp";

// function SubChildMenu({ childItems, navigation, closeMenu }) {
//   const subChildItems = navigation?.filter(
//     (item) => item.parent?.id === childItems.id
//   );

//   return (
//     <ul className="sub-menu">
//       {subChildItems.map((subChildItem) => (
//         <li key={subChildItem?.id}>
//           <Link
//             href={`${subChildItem?.path}`}
//             className="mega-menu-link"
//             aria-haspopup="true"
//             onClick={closeMenu}
//           >
//             {subChildItem?.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

function SubChildMenu({ childItems, navigation, closeMenu }) {
  const subChildItems = navigation?.filter(
    (item) => item.parent?.id === childItems.id
  );

  const handleClickSubChild = () => {
    // Close menu when subChildItem.title is clicked
    closeMenu();
  };

  return (
    <ul className="sub-menu">
      {subChildItems.map((subChildItem) => (
        <li key={subChildItem?.id}>
          <Link
            href={`${subChildItem?.path}`}
            className="mega-menu-link"
            aria-haspopup="true"
            onClick={handleClickSubChild}
          >
            {subChildItem?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ChildMenu({ parentItems, navigation, handleBack, closeMenu }) {
  const childItems = navigation?.filter(
    (item) => item.parent?.id === parentItems.id
  );
  const columns = [[], [], [], []];

  childItems.forEach((item, index) => {
    columns[(index % 3) + 1].push(item);
  });

  const [hoveredChild, setHoveredChild] = useState(null);

  return (
    <div className="dropdown-menu-box">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 mobile-nav">
            <button onClick={handleBack}>
              <i className="fas fa-angle-left"></i>
              Back
            </button>

            <h3>{parentItems?.title}</h3>
          </div>
          {columns
            .filter((column) => column.length > 0)
            .map((column, colIndex) => (
              <div
                key={`column-${colIndex}`}
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 mobile-nav"
              >
                <ul className="mega-menu--multiLevel">
                  {column.map((childItem) => (
                    <li
                      key={childItem?.id}
                      onMouseEnter={() => setHoveredChild(childItem.id)}
                      onMouseLeave={() => setHoveredChild(null)}
                    >
                      {childItem?.type === "EXTERNAL" ? (
                        <Link
                          href={`${childItem?.externalPath}`}
                          target={"_blank"}
                          className="mega-menu-link menu-active-heading"
                          aria-haspopup="true"
                          onClick={closeMenu}
                        >
                          {childItem?.title}
                        </Link>
                      ) : (
                        <Link
                          href={`${childItem?.path}`}
                          className="mega-menu-link"
                          aria-haspopup="true"
                          onClick={closeMenu}
                        >
                          {childItem?.title}
                        </Link>
                      )}
                      <SubChildMenu
                        childItems={childItem}
                        navigation={navigation}
                        closeMenu={closeMenu}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function BootstrapNav({ navigation }) {
  const [hoveredParent, setHoveredParent] = useState(null);
  const [closeMenu, setCloseMenu] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(false);
  const [navStack, setNavStack] = useState([]);
  const menuRef = useRef(null);

  const closeMenuAndReset = () => {
    setCloseMenu(false);
    setIsActiveLink(false);
    setHoveredParent(null);
    setNavStack([]);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenuAndReset();
    }
  };

  // useEffect(() => {
  //   if (closeMenu) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [closeMenu]);

  useEffect(() => {
    if (closeMenu) {
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  const handleMouseEnter = (parentId, isLast) => {
    if (!isLast) {
      setIsActiveLink(true);
      setHoveredParent(parentId);
      setNavStack((prevStack) => [...prevStack, parentId]);
    }
  };

  const handleMouseLeave = () => {
    setIsActiveLink(false);
    setHoveredParent(null);
    setNavStack([]);
  };

  const handleBack = () => {
    setNavStack((prevStack) => {
      const newStack = [...prevStack];
      newStack.pop();
      const previousParent = newStack[newStack.length - 1] || null;
      setHoveredParent(previousParent);
      return newStack;
    });
  };

  const isLastItem = (index, array) => index === array.length - 1;

  return (
    <div ref={menuRef}>
      <nav
        className={
          isActiveLink
            ? "desktop-navigation-main active_header"
            : "desktop-navigation-main"
        }
      >
        <div className="container-fluid">
          <Link href="/" className="logo">
            <Image
              loading="lazy"
              className="img-fluid"
              src={logo?.src}
              alt="logo"
              width={130}
              height={131}
            />
          </Link>
          <div className="middle-menu-block">
            <a
              href="javascript:void(0);"
              className={`mobile-menu-trigger ${
                closeMenu ? "mobile-menu-trigger-active" : ""
              }`}
            >
              <i
                className={`fas fa-bars  `}
                onClick={() => setCloseMenu(true)}
              ></i>
              <i
                className="fas fa-times"
                onClick={() => setCloseMenu(false)}
              ></i>
            </a>

            <ul
              className={`menu menu-bar main-nav-desktop-links ${
                closeMenu ? "open-menu" : ""
              }`}
            >
              {navigation
                ?.filter((items) => items.parent === null)
                ?.map((parentItems, index, array) => (
                  <li
                    key={parentItems?.id}
                    onMouseEnter={() =>
                      handleMouseEnter(parentItems.id, isLastItem(index, array))
                    }
                    onMouseLeave={handleMouseLeave}
                    className={
                      isLastItem(index, array) ? "head-contact-btn" : ""
                    }
                  >
                    {isLastItem(index, array) ? (
                      <Link
                        href={`${parentItems?.path}`}
                        className="readmore-btn border-btn"
                        aria-haspopup="true"
                        onClick={closeMenuAndReset}
                      >
                        {parentItems.title}
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    ) : (
                      <Link
                        href={`${parentItems?.path}`}
                        className="menu-link menu-bar-link"
                        aria-haspopup="true"
                      >
                        {parentItems.title}{" "}
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    )}
                    {/* <Link
                      href={`${parentItems?.path}`}
                      className={
                        isLastItem(index, array)
                          ? "readmore-btn border-btn"
                          : "menu-link menu-bar-link"
                      }
                      aria-haspopup="true"
                    >
                      {parentItems.title}{" "}
                      <i className="fas fa-chevron-right"></i>
                    </Link> */}
                    {!isLastItem(index, array) &&
                      hoveredParent === parentItems.id && (
                        <ChildMenu
                          parentItems={parentItems}
                          navigation={navigation}
                          handleBack={handleBack}
                          closeMenu={closeMenuAndReset}
                        />
                      )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BootstrapNav;
