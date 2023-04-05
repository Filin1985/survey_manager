import React from "react"
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "../../services/hooks"
import { LogoIcon, VectorIcon } from "../../ui-kit/svg/icons"
import { logoutUser } from "../../services/slices/logoutSlice"
import {
  Popover,
  Menu,
  Position,
  PeopleIcon,
  DrawerLeftFilledIcon,
} from "evergreen-ui"
import styles from "./header.module.scss"

const Header: React.FC = () => {
  const { firstName, lastName } = useSelector((store) => store.userData)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <section className={styles.header}>
      <NavLink to="/" className={styles.header__logo}>
        <LogoIcon />
        <p className={styles.header__company}>
          {" "}
          ИГиРГИ{" "}
          <span className={styles.header__service}>| Управление замерами</span>
        </p>
      </NavLink>
      <nav className={styles.header__links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
          to="/wells"
        >
          Скважины
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
          to="/services"
        >
          Подрядчики
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
          to="/customers"
        >
          Общества
        </NavLink>
      </nav>
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={({ close }) => (
          <Menu>
            <Menu.Group>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <Menu.Item onClick={close} icon={PeopleIcon}>
                  Управление пользователями
                </Menu.Item>
              </Link>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item
                icon={DrawerLeftFilledIcon}
                intent="danger"
                onClick={handleLogout}
              >
                Выйти из профиля
              </Menu.Item>
            </Menu.Group>
          </Menu>
        )}
      >
        <button className={styles.person}>
          <div className={styles.person__button}>?</div>
          <div className={styles.person__data}>
            {firstName}
            <br />
            <span>{lastName}</span>
          </div>
          <VectorIcon />
        </button>
      </Popover>
    </section>
  )
}

export default Header
